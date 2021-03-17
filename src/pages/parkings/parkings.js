import React, {useEffect, useState, useRef} from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  PageContainer,
  ParkingGrid,
  MapEditor,
} from 'components';
import {api_endpoint} from 'env';
import style from './style.module.css';


/**
 * React effect that fetches and keeps tile the configuration.
 * @return {object} A mapping of tile ids to configuration.
 */
function useTiles() {
  const [tiles, setTiles] = useState(null);

  useEffect(() => {
    window.fetch(api_endpoint + 'tiles').then((res) => {
      res.json().then((jsonRes) => {
        const tileArray = jsonRes.res;
        const tilesById = Object.fromEntries(
            tileArray.map((tile) => [tile.id, tile]),
        );
        setTiles(tilesById);
      });
    });
  }, []);

  return tiles;
}


/**
 * Side effect for fetching maps
 * @return {Array} The current map and a callback to
 * fetch the next one.
 */
function useMap() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    window.fetch(api_endpoint + 'maps').then((res) => {
      res.json().then((jsonRes) => {
        const mapArray = jsonRes.res;
        setMap(mapArray[0]);
      });
    });
  }, []);

  function fetchMap(index){
    window.fetch(`${api_endpoint}maps?index=${index}/`).then((res) => {
      res.json().then((jsonRes) => {
        const mapArray = jsonRes.res;
        if (mapArray?.[0] != undefined) {
          setMap(mapArray[0]);
        }
      });
    });
  }

  return [map, fetchMap];
}


function getNextTile(currentRow, currentCol, map, tiles){
  const orientation2rotation = {
    'north': 0,
    'east': 1,
    'south': 2,
    'west': 3,
  };

  const current = map.layout[currentRow][currentCol];
  const tileData = {...current, ...tiles[current.id]};
  const rotation = orientation2rotation[tileData.orientation];
  tileData.efec_entry = (tileData.entry + rotation) % 4;
  tileData.efec_exit = (tileData.exit + rotation) % 4;

  if (current.efec_exit == NaN){
    return null
  } else {
    let nextRow = currentRow;
    let nextCol = currentCol;
    switch (tileData.efec_exit) {
      case 0:
        nextRow = currentRow - 1;
        if (nextRow < 0) {return null}
      break;
      case 1:
        nextCol = currentCol + 1;
        if (nextCol > 4) {return null}
      break;
      case 2:
        nextRow = currentRow + 1;
        if (nextRow > 4) {return null}
      break;
      case 3:
        nextCol = currentCol - 1;
        if (nextCol < 0) {return null}
      break;
    }

    const next = map.layout[nextRow][nextCol];
    const nextRotation = orientation2rotation[next.orientation];
    const nextEfecEntry = (tiles[next.id].entry + nextRotation) % 4;
    const oppositeToNextEfecEntry = (nextEfecEntry + 2) % 4;

    console.log(tileData, {...tiles[next.id], ...next, nextEfecEntry}, oppositeToNextEfecEntry)
    console.info(tileData.exit, oppositeToNextEfecEntry)
    if (tileData.efec_exit == oppositeToNextEfecEntry) {
      return [nextRow, nextCol];
    }
  }
}


function animate(ref, map, tiles, setAnimating, locale){
  // 1. locate the start cell; if more than
  // one abort
  let [row, col] = [null, null];
  for (let rowIdx=0; rowIdx<5; rowIdx++){
    for (let colIdx=0; colIdx<5; colIdx++){
      if (map.layout[rowIdx][colIdx].id == 'start'){
        if (row == null){
          [row, col] = [rowIdx, colIdx]
        } else {
          const err = (locale == 'es'
            ? 'No se puede animar un mapa con varias salidas.'
            : 'A map with multiple exits can\'t be animated.')
          alert(err);
          setAnimating(false);
          return
        }
      }
    }
  }

  if (row == null){
    const err = (locale == 'es'
      ? 'No se puede animar un mapa sin casilla de salida.'
      : 'A map without a start cell can\'t be animated.')
    alert(err);
    setAnimating(false);
    return
  }

  // place the CV on the start cell and show
  
  

  function move(row, col){
    let top = row * 128 + 32;
    let left = col * 128 + 32;
    ref.current.style.setProperty('top', top + 'px')
    ref.current.style.setProperty('left', left + 'px')
    
    let x = getNextTile(row, col, map, tiles);
    console.log(x)
    if (x != undefined && x != null) {
      setTimeout(() => move(x[0], x[1]), 1000)
    }
  }
  move(row, col)

  // while there is an exit and the next cell
  // has an entry there, move it

  // after 5 seconds, hide the cv
  setTimeout(() => {setAnimating(false);}, 5000)
}


function useAnimation(ref, map, tiles, locale){
  const [animating, setAnimating] = useState(false);

  function requestStartAnimating(){
    if (animating === false) {
      setAnimating(true);
      animate(ref, map, tiles, setAnimating, locale);
    }
  }

  return requestStartAnimating;
}


/**
 * Parkings page component.
 * @component
 * @return {React.Component}
 */
export default function Parkings() {
  const {formatMessage, locale} = useIntl();
  const tiles = useTiles();
  const cvRef = useRef(null);
  const [map, fetchMap] = useMap();
  const requestAnimation = useAnimation(cvRef, map, tiles, locale);

  return (
    <PageContainer>
      <div id={style['game-container']}>
        <div id={style.cv} ref={cvRef}>
          CV
        </div>
        {!(tiles && map) ? '' : (
          <ParkingGrid map={map}
            editable={false}
            tilesById={tiles}/>
        )}
        <div id={style.controls}>
          <button onClick={() => requestAnimation()}>
            📹
          </button>
          <button onClick={() => fetchMap(Math.max(0, map.index - 1))}>
            🢦
          </button>
          <button onClick={() => fetchMap(map.index + 1)}>
            🢧
          </button>
        </div>
      </div>
      <div id={style.header}>
        <div className={style.top}>
          <h1>{formatMessage({id: 'parkings.header'})}</h1>
          <h2>{formatMessage({id: 'parkings.subtitle'})}</h2>
          <p>{formatMessage({id: 'parkings.description'})}</p>
        </div>
        <div>
          <h3>{formatMessage({id: 'parkings.step1_title'})}</h3>
          <p>{formatMessage({id: 'parkings.step1_text'})}</p>
        </div>
        <div>
          <h3>{formatMessage({id: 'parkings.step2_title'})}</h3>
          <p>{formatMessage({id: 'parkings.step2_text'})}</p>
        </div>
        <div>
          <h3>{formatMessage({id: 'parkings.step3_title'})}</h3>
          <p>{formatMessage({id: 'parkings.step3_text'})}</p>
        </div>
      </div>
      <h4 id={style['map-name']}>
        {map?.name != undefined ? map.name[locale] : ''}
      </h4>
      <div id={style['editor-header']}>
        <h1>{formatMessage({id: 'parkings.editor_title'})}</h1>
        <p>{formatMessage({id: 'parkings.editor_desc'})}</p>
        <span>{formatMessage({id: 'parkings.editor_alert'})}</span>
        <hr/>
      </div>
      <div id={style['editor-container']}>
        {!tiles ? '' : (
            <MapEditor tilesById={tiles}/>
          )}
      </div>
      <div id={style['more-prerow']}>
      </div>
      <div id={style['more']}>
        <h1>
          {formatMessage({id: 'parkings.more_title'})}
        </h1>
        <h2>{formatMessage({id: 'parkings.more_text'})}</h2>
        <a target='blank' href='https://github.com/Janchorizo'>
          {formatMessage({id: 'parkings.more_link'})} &#129130;
        </a>
      </div>
    </PageContainer>
  );
}

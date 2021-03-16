import React, {useEffect, useState} from 'react';
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


/**
 * Parkings page component.
 * @component
 * @return {React.Component}
 */
export default function Parkings() {
  const {formatMessage, locale} = useIntl();
  const tiles = useTiles();
  const [map, fetchMap] = useMap();

  return (
    <PageContainer>
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
      <div id={style['game-container']}>
        {!(tiles && map) ? '' : (
          <ParkingGrid map={map}
            editable={false}
            tilesById={tiles}/>
        )}
        <div id={style.controls}>
          <button>
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

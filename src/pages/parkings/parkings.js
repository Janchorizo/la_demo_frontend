import React, {useEffect, useState} from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  PageContainer,
  ParkingGrid,
  MapEditor
} from 'components';
import style from './style.module.css';


const apiPath = 'http://localhost:8000/api/';


function useTiles() {
  const [tiles, setTiles] = useState(null);

  useEffect(() => {
    window.fetch(apiPath + 'tiles').then((res) => {
      res.json().then((jsonRes) => {
        const tileArray = jsonRes.res;
        const tilesById = Object.fromEntries(
          tileArray.map((tile) => [tile.id, tile])
        );
        setTiles(tilesById);
      });
    })
  }, []);

  return tiles;
}


function useMaps() {
  const [maps, setMaps] = useState(null);

  useEffect(() => {
    window.fetch(apiPath + 'maps').then((res) => {
      res.json().then((jsonRes) => {
        const mapArray = jsonRes.res;
        setMaps(mapArray);
      });
    })
  }, []);

  return maps;
}


/**
 * Parkings page component.
 * @component
 * @return {React.Component}
 */
export default function Parkings() {
  const {formatMessage} = useIntl();
  const tiles = useTiles();
  const maps = useMaps();

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
          <p>{formatMessage({id: 'parkings.step1_title'})}</p>
        </div>
        <div>
          <h3>{formatMessage({id: 'parkings.step2_title'})}</h3>
          <p>{formatMessage({id: 'parkings.step2_text'})}</p>
        </div>
        <div>
          <h3>{formatMessage({id: 'parkings.step3_text'})}</h3>
          <p>{formatMessage({id: 'parkings.step3_text'})}</p>
        </div>
      </div>
      <div id={style['game-container']}>
        {!(tiles && maps) ? '' : (
          <ParkingGrid map={maps[0]}
            editable={false}
            tilesById={tiles}/>
        )}
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
          {formatMessage({id: 'myself.more_title'})}
        </h1>
        <h2>{formatMessage({id: 'myself.more_text'})}</h2>
        <a target='blank' href={formatMessage({id: 'myself.cv_link'})}>
          {formatMessage({id: 'myself.more_link'})} &#129130;
        </a>
      </div>
    </PageContainer>
  );
}

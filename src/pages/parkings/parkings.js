import React, {useEffect, useState} from 'react';
// internal
import {
  PageContainer,
  ParkingGrid,
} from 'components';
// import style from './style.module.css';


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
  const tiles = useTiles();
  const maps = useMaps();

  return (
    <PageContainer>
      {!(tiles && maps) ? '' : (
        <ParkingGrid map={maps[0]}
          editable={false}
          tilesById={tiles}/>
      )}
    </PageContainer>
  );
}

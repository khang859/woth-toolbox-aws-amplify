import { MarkerOptions, MarkerType } from 'types/markers';

type HuntingMapClickHandler = (x: number, y: number) => void;

export interface HuntingMapOffsets {
  pageX: number;
  pageY: number;
  translateX: number;
  translateY: number;
}

export interface HuntingMapOptions {
  mapHeight: number;
  mapLeft: number;
  mapScale: number;
  mapTop: number;
  mapWidth: number;
}

export interface HuntingMapProps {
  defaultScale?: number;
  imageHeight: number;
  imageSrc: string;
  imageWidth: number;
  markerFilter?: Array<MarkerType>;
  markerVisibilityMap?: Map<MarkerType, number>;
  markers?: Array<MarkerOptions>;
  maxGenericMarkerSize?: number;
  maxScale?: number;
  minOverflow?: number;
  minScale?: number;
  scaleIncrement?: number;
  showButtons?: boolean;
  onClick?: HuntingMapClickHandler;
}

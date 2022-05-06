export interface HeaderPropType {
  title: any;
  classes?: Array<string>;
}

export interface ButtonPropType {
  text: string;
  onClick?: any;
  classes?: Array<string>;
}

export interface NavPropType {}

export interface ToolbarPropType {
  HomeRef?: any;
  ProfileRef?: any;
  setScrollMod?: Function;
}

export interface ScrollDownPropType {
  scrollMod?: boolean;
}

export interface FrontPropType {}

export interface ThreeBeefPropType {
  scrollMod: boolean;
  setScrollMod: Function;
}

export interface ThreePropType {
  setMouseOver: Function;
  scrollMod: boolean;
}

export interface BeefModelPropType {
  refProp: any;
  position?: [number, number, number];
  rotation?: [number, number, number];
  setMouseOver: Function;
  setBeefActive: Function;
  beefActive: boolean;
}

export interface PlaceReviewPropType {}

export interface MetaBeefPropType {}

export interface CubePropType {}

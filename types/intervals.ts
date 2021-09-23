export type Timeseries = {
  tnt: (string | number)[][];
  tempRoomC: (string | number)[][];
  tempBedC: (string | number)[][];
  respiratoryRate: (string | number)[][];
  heartRate: (string | number)[][];
  heating: (string | number)[][];
};

export type Stage = {
  stage: string;
  duration: string;
};

export type Interval = {
  id: string;
  ts: string;
  stages: Stage[];
  score: number;
  timeseries: Timeseries;
};

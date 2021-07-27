type TimesProps = {
  goals: number;
  name: string;
};

type TwitterPost = {
  id: string;
  code: string;
};

type ICreateGameDTO = {
  id?: string;
  times: {
    a: TimesProps;
    b: TimesProps;
  };
  winner: string;
  metadata: {
    event: string;
    date: string;
  };
  twitters: TwitterPost[];
};

export { ICreateGameDTO };

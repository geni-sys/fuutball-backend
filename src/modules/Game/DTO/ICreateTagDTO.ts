interface ICreateTagDTO {
  id?: string;

  players: string;

  metadata: {
    event: string;
    date: string;
  };
}
export { ICreateTagDTO };

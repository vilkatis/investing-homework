import { IsInt, Min } from 'class-validator';

export class AddToWatchlistRequest {
  @IsInt()
  @Min(1)
  instrumentId: number;
}

import { IsInt, Min } from 'class-validator';

export class RemoveFromWatchlistRequest {
  @IsInt()
  @Min(1)
  instrumentId: number;
}

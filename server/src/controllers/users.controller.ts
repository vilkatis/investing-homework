import { Body, Delete, Get, JsonController, Post } from 'routing-controllers';
import { UsersService } from '../services';
import { Container } from 'typedi';
import { AddToWatchlistRequest, RemoveFromWatchlistRequest } from '../validation';


@JsonController('/users')
export class UsersController {
  private _usersService: UsersService;

  constructor() {
    this._usersService = Container.get(UsersService);
  }

  @Get('/:id/watchlist')
  public getUserWatchlist(): Promise<number[]> {
    return this._usersService.getWatchlist(1);
  }

  @Post('/:id/watchlist')
  public async addToWatchlist(@Body() request: AddToWatchlistRequest): Promise<unknown> {
    return this._usersService.addToWatchlist(1, request.instrumentId);
  }

  @Delete('/:id/watchlist')
  public async removeFromWatchlist(@Body() request: RemoveFromWatchlistRequest): Promise<unknown> {
    return this._usersService.removeFromWatchlist(1, request.instrumentId);
  }
}

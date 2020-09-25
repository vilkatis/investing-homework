import { Body, Delete, Get, JsonController, Params, Post } from 'routing-controllers';
import { UsersService } from '../services';
import { Container } from 'typedi';
import { AddToWatchlistRequest, RemoveFromWatchlistRequest } from '../validation';
import { IWatchlistItem } from '../models';

@JsonController('/users')
export class UsersController {
  private _usersService: UsersService;

  constructor() {
    this._usersService = Container.get(UsersService);
  }

  @Get('/:id/watchlist')
  public getUserWatchlist(): Promise<IWatchlistItem[]> {
    return this._usersService.getWatchlist(1);
  }

  @Post('/:id/watchlist')
  public async addToWatchlist(@Body() request: AddToWatchlistRequest): Promise<unknown> {
    return this._usersService.addToWatchlist(1, request.instrumentId);
  }

  @Delete('/:id/watchlist/:instrumentId')
  public async removeFromWatchlist(@Params({}) { instrumentId }: RemoveFromWatchlistRequest): Promise<unknown> {
    return this._usersService.removeFromWatchlist(1, instrumentId);
  }
}

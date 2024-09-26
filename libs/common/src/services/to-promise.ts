import { lastValueFrom, Observable } from 'rxjs';

export async function ToPromise(observable: Observable<any>): Promise<any> {
  return await lastValueFrom(observable, { defaultValue: null });
}

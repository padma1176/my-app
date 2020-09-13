import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '588fd3f3ac196513494b0a763a8dc311';
  public getVideos(){
    return this.httpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.API_KEY}`)
    .pipe(retry(1),
    catchError(this.handleError));

    
    
  }
  constructor(private httpClient: HttpClient) { }
  handleError(error) {

    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      // client-side error
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      // server-side error
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    }
 
    window.alert(errorMessage);
 
    return throwError(errorMessage);
 
  }
}

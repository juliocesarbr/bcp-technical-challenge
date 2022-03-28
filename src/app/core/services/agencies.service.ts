import { Injectable } from '@angular/core';
import AgenciesJson from '../../../assets/json/agencies.json';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  constructor(

  ) { }

  /**
   * Save Agencies in Local Storage
   * Only if doesnt exist
   */
  public saveAgenciesInLocalStorage() {

    const localStorageAgencies = localStorage.getItem('agencies');

    // If there is not agencies in local storage, set item for first time
    if(!localStorageAgencies) {
      localStorage.setItem('agencies', JSON.stringify(AgenciesJson));
    }

  }

  /**
   * Get agencies in local storage
   * @returns json or empty object
   */
  public index() {

    const localStorageAgencies = localStorage.getItem('agencies');

    return localStorageAgencies ? JSON.parse(localStorageAgencies) : [];
  }

  /**
   * Update agency in local storage
   * searching for latitude and longitude
   * because the data doesn't have id
   */
  async update(oldValues: any, newValues: any) {

    const localStorageAgencies = localStorage.getItem('agencies');
    const agenciesObjects = localStorageAgencies ? JSON.parse(localStorageAgencies) : [];

    // Search for latitude and longitude
    // Assuming that are unique values for each agency
    // Because the json data doesn't have ids
    const index = agenciesObjects.findIndex((agency: any) => agency.lat === Number(oldValues.lat) && agency.lon === Number(oldValues.lon));
    agenciesObjects.splice(index, 1, newValues);

    await this.updateAgenciesInLocalStorage(agenciesObjects);

    return true;
  }

  /**
   * Update agencies in local storage
   * @param agencies
   * @returns boolean
   */
  updateAgenciesInLocalStorage(agencies: any) {
    return new Promise((resolve, reject) => {

      localStorage.removeItem('agencies');

      localStorage.setItem('agencies', JSON.stringify(agencies));

      resolve(true);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AgenciesService } from '../../../core/services/agencies.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent implements OnInit {

  agency: any = [];

  form: FormGroup;

  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private agenciesService: AgenciesService
  ) {
    this.activatedRoute.params.subscribe(
      params => {

        // Get agency data from activated route params
        this.agency = params ?? this.agency;
      }
    );

    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this.fb.group({
      name: [{ value: this.agency.agencia, disabled: false }, [Validators.required]],
      address: [{ value: this.agency.direccion, disabled: false }, [Validators.required]],
      district: [{ value: this.agency.distrito, disabled: false }, [Validators.required]],
      latitude: [{ value: this.agency.lat, disabled: false }, [Validators.required]],
      longitude: [{ value: this.agency.lon, disabled: false }, [Validators.required]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid.
    if (this.form.invalid) {
      return;
    }

    // Prepare agency object for update
    const formAgencyValues = {
      agencia: this.form.value.name,
      departamento: this.agency.departamento,
      direccion: this.form.value.address,
      distrito: this.form.value.district,
      lat: Number(this.form.value.latitude),
      lon: Number(this.form.value.longitude),
      provincia: this.agency.provincia
    };

    this.update(formAgencyValues);
  }

  /**
   * Update agency
   * @param formValues any
   */
  async update(formValues: any) {
    const updatedAgency = await this.agenciesService.update(this.agency, formValues)

    // Return if is ok
    if(updatedAgency){
      this.router.navigate(['agencies/index']);
    }
  }

}

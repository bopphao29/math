import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MathComponent implements OnInit {

  formData : FormGroup
  formHinhTamGiac: FormGroup

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) { }

  validationform: FormGroup;
  ngOnInit(): void {
    // this.validationform = this.formBuilder.group({
    //   name: ['', [Validators.required]],
    //   phone: ['', [Validators.required]],
    //   balance: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //   date: ['', [Validators.required]],
    // });
    // this.tinhTG()
  }

  // get form() {
  //   return this.validationform.controls;
  // }


  makeFormChuViTG(d?) {
    return this.formBuilder.group({
      canhThuNhat : 0,
      canhThuHai: 0,
      canhThuBa: 0
      // currency: [data.currency || 'VND'],
    })
  }

  saveData(){

  }
/**
   * Modal Open
   * @param content modal content
   */
  
  openModalHinhTamGiac(chuViHinhTamGiac: any) {
    this.formHinhTamGiac = this.makeFormChuViTG()
    this.modalService.open(chuViHinhTamGiac);
  }

  chuViTG : number = 0

  tinhCVTG(){
    if((this.formHinhTamGiac.value.canhThuBa + this.formHinhTamGiac.value.canhThuHai) >  this.formHinhTamGiac.value.canhThuNhat && ( this.formHinhTamGiac.value.canhThuNhat + this.formHinhTamGiac.value.canhThuHai) > this.formHinhTamGiac.value.canhThuBa && ( this.formHinhTamGiac.value.canhThuNhat + this.formHinhTamGiac.value.canhThuBa) > this.formHinhTamGiac.value.canhThuHai)
    {
      this.chuViTG = (this.formHinhTamGiac.value.canhThuBa + this.formHinhTamGiac.value.canhThuHai + this.formHinhTamGiac.value.canhThuNhat) * 1.0
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "warning",
        title: "Đây không phải là tam giác"
      });
    }
  }

}

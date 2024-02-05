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
  formChuViHinhTamGiac: FormGroup
  formDienTichHinhTamGiac : FormGroup

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

  makeFormDienTichTG(d?) {
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
  
  openModalCVHinhTamGiac(chuViHinhTamGiac: any) {
    this.formChuViHinhTamGiac = this.makeFormChuViTG()
    this.modalService.open(chuViHinhTamGiac);
  }

  chuViTG : number = 0
  tinhCVTG(){
    if((this.formChuViHinhTamGiac.value.canhThuBa + this.formChuViHinhTamGiac.value.canhThuHai) >  this.formChuViHinhTamGiac.value.canhThuNhat && ( this.formChuViHinhTamGiac.value.canhThuNhat + this.formChuViHinhTamGiac.value.canhThuHai) > this.formChuViHinhTamGiac.value.canhThuBa && ( this.formChuViHinhTamGiac.value.canhThuNhat + this.formChuViHinhTamGiac.value.canhThuBa) > this.formChuViHinhTamGiac.value.canhThuHai)
    {
      this.chuViTG = (this.formChuViHinhTamGiac.value.canhThuBa + this.formChuViHinhTamGiac.value.canhThuHai + this.formChuViHinhTamGiac.value.canhThuNhat) * 1.0
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

  dTichTG : number = 0.0
  nuaCV : number = 0.0

  openModalDTHinhTamGiac(dienTichHinhTamGiac: any) {
    this.formDienTichHinhTamGiac = this.makeFormChuViTG()
    this.modalService.open(dienTichHinhTamGiac);
  }

  tinhDTTG(){
    if((this.formDienTichHinhTamGiac.value.canhThuBa + this.formDienTichHinhTamGiac.value.canhThuHai) >  this.formDienTichHinhTamGiac.value.canhThuNhat && ( this.formDienTichHinhTamGiac.value.canhThuNhat + this.formDienTichHinhTamGiac.value.canhThuHai) > this.formDienTichHinhTamGiac.value.canhThuBa && ( this.formDienTichHinhTamGiac.value.canhThuNhat + this.formDienTichHinhTamGiac.value.canhThuBa) > this.formDienTichHinhTamGiac.value.canhThuHai)
    {
      this.chuViTG = (this.formDienTichHinhTamGiac.value.canhThuBa + this.formDienTichHinhTamGiac.value.canhThuHai + this.formDienTichHinhTamGiac.value.canhThuNhat) * 1.0
      this.nuaCV = this.chuViTG/2
      this.dTichTG = Math.sqrt(this.nuaCV * (this.nuaCV - this.formDienTichHinhTamGiac.value.canhThuNhat)* (this.nuaCV - this.formDienTichHinhTamGiac.value.canhThuHai)* (this.nuaCV - this.formDienTichHinhTamGiac.value.canhThuBa))
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

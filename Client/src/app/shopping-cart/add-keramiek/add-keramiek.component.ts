import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 
import { Keramiek } from 'src/app/models/keramiek.model';
import { KeramiekDataService } from 'src/app/services/keramiek-data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add-keramiek',
  templateUrl: './add-keramiek.component.html',
  styleUrls: ['./add-keramiek.component.css']
})
export class AddKeramiekComponent implements OnInit {

  public readonly prices = [20.00, 40.00, 60.00, 80.00, 100.00, 120.00];
  @Output() public newKeramiek = new EventEmitter<Keramiek>();
  keramiekFormGroup : FormGroup;
  

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;


  constructor(private formB : FormBuilder,
              private _keramiekDataService: KeramiekDataService, private http: HttpClient) { }

    fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
     }

     preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
   
      var reader = new FileReader();      
      reader.readAsDataURL(this.fileData); 
      reader.onload = (_event) => { 
        this.previewUrl = reader.result; 
      }
    }
  
  ngOnInit(): void {
     this.keramiekFormGroup = this.formB.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.minLength(10)],
      color: ['',[Validators.required,Validators.minLength(3)]],
      price: ['',[Validators.required]],
      imageUrl: [''],
      
    });
  }

  errorMessage(errors: any): string {
    if (errors.required){
      return 'is verplicht!';
    } else if (errors.minlength){
      return `tenminste ${errors.minlength.requiredLength}
            karakters! (u heeft er ${errors.minlength.actualLength})`;
    }
    return '';
  
  }

  onSubmit() {
    console.log(this.keramiekFormGroup)
    let keramiek = new Keramiek(this.keramiekFormGroup.value.id,this.keramiekFormGroup.value.name, this.keramiekFormGroup.value.description,this.keramiekFormGroup.value.color,
      this.keramiekFormGroup.value.price, this.keramiekFormGroup.value.imageUrl)
      console.log(keramiek);

      this._keramiekDataService
          .addNewKeramiek(new Keramiek(this.keramiekFormGroup.value.id,this.keramiekFormGroup.value.name, this.keramiekFormGroup.value.description,this.keramiekFormGroup.value.color,
            this.keramiekFormGroup.value.price, this.keramiekFormGroup.value.imageUrl));
            
    //rebind to a new group after submit 
      this.keramiekFormGroup = this.formB.group({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      color: (['',Validators.required]),
      price: (['', Validators.required]),
      imageUrl: (['']),
      description: (['',Validators.required, Validators.minLength(10)])
    });

    const formData = new FormData();
    formData.append('files', this.fileData);
     
    this.fileUploadProgress = '0%';
 
    this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
      reportProgress: true,
      observe: 'events'   
    })
    .subscribe(events => {
      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';
        console.log(events.body);          
        alert('Uploaded!');
      }
  })
}
}
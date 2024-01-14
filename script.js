function generateIdentity(){
    const fullName=document.getElementById('fullName').value;
    const dob=document.getElementById('dob').value;
    const adress=document.getElementById('adress').value;
    const mention=document.getElementById('mention').value;
    const level=document.getElementById('level').value;
    const sex=document.getElementById('sex').value;
    const contact=document.getElementById('contact').value;
    const mail=document.getElementById('mail').value;
    const grade=document.getElementById('grade').value;
    // const photoInput = document.getElementById('photo');
    // const photoUrl=URL.createObjectURL(photoInput.files[0]);
    


    const identityCard=document.getElementById('identityCard');
    identityCard.innerHTML=`
        <h4>VOTRE CARTE D'ETUDIANT: </h4>
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 mt-5 pt-5">
                <div class="row z-depth-3">
                    <div class="col-sm-5 bg-dark">
                        <div class="card-block text-center text-white">
                        <i class="fas fa-user-tie fa-7x mt-5"></i>

                            <h2 class="font-weight-bold mt-4">${fullName}</h2>
                            <p>||Etudiant||</p>
                        </div>

                    </div>
                    <div class="col-sm-7 bg-white border">
                        <h3 class="mt-3 text-center">INFORMATIONS PERSONNELLES</h3>
                        <hr class="bg-dark mt-0 w-250">
                        
                            <div>
                          
                                    <span class="font-weight-bold">Nom complet: </span>
                                    <span class="text-muted">${fullName}</span>
                                 
                            <div >
                                
                                    <span class="font-weight-bold">Date de naissance: </span>
                                    <span class="text-muted">${dob}</span>
                                
                            </div>
                            <div >
                               
                                    <span class="font-weight-bold">Sexe: </span>
                                    <span class="text-muted">${sex}</span>
                                 
                            <div >
                                
                                     <span class="font-weight-bold">Adresse: </span>
                                     <span class="text-muted">${adress}</span>
                                 
                             </div>

                            <div>
                                    <span class="font-weight-bold">Contacts: </span>
                                    <span class="text-muted">${contact}</span>

                            </div>
                            <div>
                                <span class="font-weight-bold">Email: </span>
                                <span class="text-muted">${mail}</span>
                            </div>

                        <div class="row">
                            <div class="col-sm-8">
                                <span class="font-weight-bold">Mention: </span>
                                <span class="text-muted">${mention}</span>
                            </div>
                            <div class="col-sm-4">
                                <span class="font-weight-bold">Niveau: </span>
                                <span class="text-muted">${level} </span>
                            </div>
                            <div>
                                <span class="font-weight-bold">Grade: </span>
                                <span class="text-muted"> ${grade} </span>

                            </div>
                        </div>
                        
                        <hr class="bg-dark">

                    </div>


                </div>
            </div>

        </div>
    `;
    identityCard.style.display='block';
    const element = document.getElementById('identityCard');
    html2pdf(element, {
        margin: 10,
        filename:'carte.pdf',
        image:{type:'jpeg',quality:1.0},
        html2canvas:{scale:1},
        jsPDF: {unit:'mm',format:'a4',orientation:'landscape'},
    });
    
}

function generatecard(){
    const fullName=document.getElementById('fullName').value;
    const age=document.getElementById('age').value;
    const adress=document.getElementById('adress').value;
    const asa=document.getElementById('asa').value;
    const ese=document.getElementById('ese').value;
    const sex=document.getElementById('sex').value;
    const contact=document.getElementById('contact').value;
    const mail=document.getElementById('mail').value;
    // const photoInput = document.getElementById('photo');
    // const photoUrl=URL.createObjectURL(photoInput.files[0]);
    


    const businessCard=document.getElementById('businessCard');
    businessCard.innerHTML=`
        <h4>VOTRE CARTE DE VISITE: </h4>
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 mt-5 pt-5">
                <div class="row z-depth-3">
                    <div class="col-sm-5 bg-dark">
                        <div class="card-block text-center text-white">
                        <i class="fas fa-user-tie fa-7x mt-5"></i>

                            <h2 class="font-weight-bold mt-4">${fullName}</h2>
                            <p>||${asa}||</p>
                        </div>

                    </div>
                    <div class="col-sm-7 bg-white border">
                        <h3 class="mt-3 text-center">INFORMATIONS PERSONNELLES</h3>
                        <hr class="bg-dark mt-0 w-250">
                        
                            <div>
                          
                                    <span class="font-weight-bold">Nom complet: </span>
                                    <span class="text-muted">${fullName}</span>
                                 
                            <div >
                                
                                    <span class="font-weight-bold">Age: </span>
                                    <span class="text-muted">${age}</span>
                                
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

                        
                        <hr class="bg-dark">
                        <div class="row">
                            <div class="col-sm-8">
                                <span class="font-weight-bold">Profession: </span>
                                <span class="text-muted">${asa}</span>
                            </div>
                            <div class="col-sm-4">
                                <span class="font-weight-bold">Entreprise: </span>
                                <span class="text-muted">${ese} </span>
                            </div>
                        
                        </div>
                        
                        <hr class="bg-dark">

                    </div>


                </div>
            </div>

        </div>
    `;
    businessCard.style.display='block';
    const element = document.getElementById('businessCard');
    html2pdf(element, {
        margin: 10,
        filename:'visit.pdf',
        image:{type:'jpeg',quality:1.0},
        html2canvas:{scale:1},
        jsPDF: {unit:'mm',format:'a4',orientation:'landscape'},
    });
}
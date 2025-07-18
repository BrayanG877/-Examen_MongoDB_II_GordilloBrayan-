# -Examen_MongoDB_II_GordilloBrayan-
//use Brayan

db.createCollection("person");
//Insercion de person simple(en caso de que no pueda utilizar el jsonSchema,ni validator)
db.person.insertMany([
    {
        "identification": "100001",        //id:687a7d049723e3e670b3adee
        "firstName":"Gabriel",
        "lastName":"Mendez Pardo",
        "email":"mpardo@mail.com",
        "phoneNumber":"5552631",
        "bloodType":"O+",
        "adress":"Cl 85 # 13 - 65"
    },
    {
        "identification": "100002",         //id:687a7d049723e3e670b3adef
        "firstName":"Juana",
        "lastName":"Levi Zuñiga",
        "email":"jlevi@mail.com",
        "phoneNumber":"5558745",
        "bloodType":"AB+",
        "adress":"Cl 68 # 7 - 58"
    },
    {
        "identification": "100003",         //id:687a7d049723e3e670b3adf0
        "firstName":"Pedro",
        "lastName":"Pascal Lemus",
        "email":"ppascal@mail.com",
        "phoneNumber":"5557487",
        "bloodType":"O+",
        "adress":"Cr 100 # 65 - 85"
    },
    {
        "identification": "100004",          //id:687a7d049723e3e670b3adf1
        "firstName":"Anai",
        "lastName":"Monterrosa Li",
        "email":"amonterrosa@mail.com",
        "phoneNumber":"5553145",
        "bloodType":"O-",
        "adress":"AV. 68 # 01 - 25"
    },
    {
        "identification": "100005",          //id:687a7d049723e3e670b3adf2
        "firstName":"Camilo",
        "lastName":"Arnau Hernandez",
        "email":"carnau@mail.com",
        "phoneNumber":"5554678",
        "bloodType":"O+",
        "adress":"Cr 56 # 25 - 56"
    },
])

db.createCollection("offices");
//Insercion de offices simple(en caso de que no pueda utilizar el jsonSchema,ni validator)
db.offices.insertMany([   
    {
        "code": "001",        //id:687a7e419723e3e670b3adf3
        "floor":"1",
        "active":"True"
    },
    {
        "code": "002",         //id:687a7e419723e3e670b3adf4
        "floor":"1",
        "active":"True"
    },
    {
        "code": "003",         //id:687a7e419723e3e670b3adf5
        "floor":"2",
        "active":"True"
    },
])

db.createCollection("doctors");
//insercion de doctors simple(en caso de que no pueda hacer jsonSchema, validator) 
db.doctors.insertMany([   
    {
        "code":"D001",           //id:687a80ea9723e3e670b3adf6
        "person":"100001",
        "specialism":"Medicina General",
        "start_date":"1/1/2024",
        "active":"true"
    },
    {
        "code":"D002",          //id:687a80ea9723e3e670b3adf7
        "person":"100002",
        "specialism":"Nutrición",
        "start_date":"2/23/2024",
        "active":"true"
    },
])


db.createCollection("medicines");
//insercion de medicines simple(en caso de que no pueda hacer jsonSchema, validator) 
db.medicines.insertMany([   
    {
        "code":"M01",         //id:687a811b9723e3e670b3adf8
        "name":"Amoxicilina",
        "descripcion":"controla el amor",
        "active":"true"
    },
    { 
        "code":"M02",         //id:687a811b9723e3e670b3adf9
        "name":"Ibuprofeno",
        "descripcion":"controla la gripita",
        "active":"true"
    },
    {
        "code":"M03",           //id:687a811b9723e3e670b3adfa
        "name":"Omeprazol",
        "descripcion":"controla el dolor de las cejas",
        "active":"true"
    },
    {
        "code":"M04",          //id:687a811b9723e3e670b3adfb
        "name":"Hidroxido de aluminio",
        "descripcion":"Controla la acidez estomacal.",
        "active":"true"
    },
])


db.createCollection("medications");
//insercion de medications simple(en caso de que no pueda hacer jsonSchema, validator) 
db.medications.insertMany([   
    {
        "doctor_apointment":"1",         //id:687a82ab9723e3e670b3adfc
        "medicine":"M01",
        "dosage":"12",
        "note":"1 pastilla cada 8 horas"
    },
    {
        "doctor_apointment":"2",         //id:687a82ab9723e3e670b3adfd
        "medicine":"M03",
        "dosage":"6",
        "note":"1 pastilla cada 12 Horas"
    },
    {
        "doctor_apointment":"2",         //id:687a82ab9723e3e670b3adfe
        "medicine":"M04",
        "dosage":"1",
        "note":"1 cucharada cada vez que sienta acidez."
    },
    {
        "doctor_apointment":"3",         //id:687a82ab9723e3e670b3adff
        "medicine":"M01",
        "dosage":"9",
        "note":"1 pastilla cada 8 horas"
    },
    {
        "doctor_apointment":"3",         //id:687a82ab9723e3e670b3ae00
        "medicine":"M02",
        "dosage":"12",
        "note":"1 pastilla cada 6 horas"
    },
    {
        "doctor_apointment":"4",         //id:687a82ab9723e3e670b3ae01
        "medicine":"M04",
        "dosage":"1",
        "note":"1 cucharada cada vez que sienta acidez."
    },
])


db.createCollection("doctors_apointments");
//insercion de doctors_apointments simple(en caso de que no pueda hacer jsonSchema, validator) 
db.doctor_apointment.insertMany([   
    {
        "id":"1",         //id:687a8a6b9723e3e670b3ae02
        "apointment_date":"1/2/2025 10:00:00",
        "doctor":"D001",      //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id del doctor id:687a80ea9723e3e670b3adf6
        "person":"100003",    //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la persona 03 id:687a7d049723e3e670b3adf0
        "office":"O01",       //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la oficina 1 id:687a7e419723e3e670b3adf3
        "clinical_diagnosis":"Infección en la piel.",
        "recommendations":"No ingerir alcohol y bebidas acidas."
    },
    {
        "id":"2",         //id:687a8a6b9723e3e670b3ae03
        "apointment_date":"1/2/2025 13:00:00",
        "doctor":"D002",      //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id del doctor id:687a80ea9723e3e670b3adf7
        "person":"100004",    //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la persona 04 id:687a7d049723e3e670b3adf1
        "office":"O03",       //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la oficina 3 id:687a7e419723e3e670b3adf5
        "clinical_diagnosis":"Sobrepeso y reflujo.",
        "recommendations":"Disminuir carbohhidratos, comidas rápidas y altas en grasas."
    },
    {
        "id":"3",         //id:687a8a6b9723e3e670b3ae04
        "apointment_date":"2/20/2025 14:00:00",
        "doctor":"D001",      //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id del doctor id:687a80ea9723e3e670b3adf6
        "person":"100005",    //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la persona 05 id:687a7d049723e3e670b3adf2
        "office":"O01",       //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la oficina 1 id:687a7e419723e3e670b3adf3
        "clinical_diagnosis":"Infección respiratoria.",
        "recommendations":"Guardar reposos y no exponerse a la lluvia."
    },
    {
        "id":"4",         //id:687a8a6b9723e3e670b3ae05
        "apointment_date":"3/10/2025 8:00:00",
        "doctor":"D001",        //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id del doctor id:687a80ea9723e3e670b3adf6
        "person":"100003",      //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la persona 03 id:687a7d049723e3e670b3adf0
        "office":"O02",         //en este caso, si el ejercicio se hubiera hecho de la forma correcta, en este espacio va el id de la oficina 2 id:687a7e419723e3e670b3adf4
        "clinical_diagnosis":"Acidez y reflujo gastrico.",
        "recommendations":"No ingerir alcohol y bebidas acidas."
    },
])
//todas estas colecciones no tienen esquema de validacion



db.createRole(
    {
    role: "administrator", 
    password: "Admin123",
    privileges: [
        { resource: { db: "Brayan", collection: "person" }, actions: ["find", "insert", "update", "remove"] },
        { resource: { db: "Brayan", collection: "offices" }, actions: ["find", "insert", "update", "remove"] },
        { resource: { db: "Brayan", collection: "doctors" }, actions: ["find", "insert", "update", "remove"] },
        { resource: { db: "Brayan", collection: "doctors_apointments" }, actions: ["find", "insert", "update", "remove"] },
        { resource: { db: "Brayan", collection: "medications" }, actions: ["find", "insert", "update", "remove"] },
        { resource: { db: "Brayan", collection: "medicines" }, actions: ["find", "insert", "update", "remove"] },
    ],
    roles: []
    }
)


db.createRole(
    {
    role: "doctor",
    password:"Doctor123",
    privileges: [
        { resource: { db: "Brayan", collection: "doctors_apointments" }, actions: ["find", "insert"] },
        { resource: { db: "Brayan", collection: "medications" }, actions: ["find", "insert",] },
        { resource: { db: "Brayan", collection: "medicines" }, actions: ["find", "insert"] },
    ],
    roles: []
    }
)

db.createRole(
    {
    role: "patient",
    password:"Patient123",
    privileges: [
        { resource: { db: "Brayan", collection: "doctors" }, actions: ["find", "insert", "update"] },
        { resource: { db: "Brayan", collection: "doctors_apointments" }, actions: ["find", "insert", "update"] },
        { resource: { db: "Brayan", collection: "medications" }, actions: ["find", "insert", "update"] },
        { resource: { db: "Brayan", collection: "medicines" }, actions: ["find", "insert", "update"] },
    ],
    roles: []
    }
)

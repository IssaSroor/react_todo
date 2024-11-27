import React , {useState} from "react"; 

function CarList(){

    const [car , setCar] = useState([]);
    const [CarYear , setCarYear] = useState(new Date().getFullYear());
    const [carMake , setCarMake] = useState("");
    const [carModel , setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year : CarYear , make : carMake , model : carModel};

        setCar (c => [...c , newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCar(c => c.filter((_,i) => i !== index));
    }

    function handleUpdateYear(event){
        setCarYear(event.target.value);
    }

    function handleUpdateMake(event){
        setCarMake(event.target.value);
    }

    function handleUpdateModel(event){
        setCarModel(event.target.value);
    }

    return(

        <div>

            <h2>List Of Cars</h2>
            <div>
                <ul>
                    {car.map((car,index)=>
                    <li key={index} onClick= {() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
                </ul>
            </div>
            <div>
            <input type="number" value={CarYear} onChange={handleUpdateYear}/>
            </div>
            <div>
            <input type="text" value={carMake} onChange={handleUpdateMake} placeholder="enter car make"/>
            </div>
            <div>
            <input type="text" value={carModel} onChange={handleUpdateModel} placeholder="enter car model" />
            </div>
            <button onClick={handleAddCar}> Add car </button>
        </div>

    );


}

export default CarList;
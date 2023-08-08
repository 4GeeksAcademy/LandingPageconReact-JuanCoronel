import React from "react";

const Card = () => {
    return (
        <div className="card m-0" style={{ width: "19rem" }}>
            <img src="https://whc.unesco.org/uploads/thumbs/site_1593_0004-500-325-20180313154950.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</p>
                <div className="card-footer text-center pt-3"> 
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header title="Galería de imágenes con React" />
      <div className="">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-1">
          <Card
            cardImage="https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_960_720.jpg"
            cardTitle="New York"
            cardText="Invierno 10/12/2017"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
          <Card
            cardImage="https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_960_720.jpg"
            cardTitle="Estatua de la Libertad"
            cardText="Famosa atraccion al visitar la ciudad"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
          <Card
            cardImage="https://cdn.pixabay.com/photo/2016/10/16/13/06/new-york-1745089_960_720.jpg"
            cardTitle="New York de Noche"
            cardText="Hermosas Vistas"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
          <Card
            cardImage="https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129_960_720.jpg"
            cardTitle="New York Hora Dorada"
            cardText="Excelente para tomar fotos"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

function NuevoClasificado() {
    return (
        <div>
            <Header></Header>
            <div class="container mb-5">
                <br />
                <h2>CLASIFICADOS</h2>
                <br /><br /><br />
                <h3 class="text-white text-center">Nuevo Clasificado</h3>
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    aria-label=".form-control-lg example"
                    v-model="nota.email"
                /><br />
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Titulo"
                    aria-label=".form-control-lg example"
                    style={{ color: "white" }}
                /><br />
                <input
                    class="form-control"
                    type="text"
                    placeholder="Descripción"
                    aria-label="default input example"
                    style={{ color: "white" }}
                /><br />
                <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Contacto"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                /><br />
                <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Url"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                /><br />
                <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" style={{ color: "white" }} change="previewFiles" class="form-control" id="customFile" />
                <br />
                <br />
                <button class="btn-success btn-lg" type="submit">Agregar</button>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default NuevoClasificado
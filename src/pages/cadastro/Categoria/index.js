import React from 'react'
import {Link} from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'

export default function CadastroCategoria(){
    return(
    <>
    <PageDefault>
        <h1>CADASTRO</h1>

        <form>
            <label>
                Nome da Categoria:
                <input type="text"/>
            </label>
            <button>Cadastrar</button>
        </form>
            
        <Link to='/'>
            Voltar para Home
        </Link>
    </PageDefault>
    </>
    )
}
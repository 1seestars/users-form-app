import React from 'react'
import AddUserComponentFirstPage from './FirstPageWindow'
import AddUserComponentSecondPage from './SecondPageWindow'
import { connect } from 'react-redux'
import { FinalPage } from './FinalPageWindow'
import { getValues, saveValues } from '../../store/adminPanel/actions'
import { store } from '../../index'

class AddUserMainForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            page: 1,
            isLoading: false
        }
    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1 })
    }
    
    previousPage = () => {
        this.setState({ page: this.state.page - 1 })
    }

    pageReset = () => {
        this.setState({ page: 1 })
    }

    onSubmit = values => {
        this.props.getValues(values)
        this.props.saveValues()
        this.nextPage()
        this.finalPage()
    }

    finalPage = () => {
        this.setState({ isLoading: true })
        setTimeout(() => this.setState({ isLoading: false }), 2000)
    }

    render() {
        const { page } = this.state
        return (
            <div>
                {page === 1 && <AddUserComponentFirstPage onSubmit={this.nextPage}/>}
                {page === 2 && <AddUserComponentSecondPage previousPage={this.previousPage} onSubmit={values => this.onSubmit(values)}/>}
                {page === 3 && <FinalPage isLoading={this.state.isLoading} pageReset={this.pageReset} />}
            </div>
        )
    }
}

const mapDispatchToProps = {
    getValues,
    saveValues
}

export default connect(null, mapDispatchToProps)(AddUserMainForm)

const setStateToLocalStorage = users => {
    localStorage.setItem('test-form-app', JSON.stringify(users))
}
  
window.addEventListener('beforeunload', () => setStateToLocalStorage(store.getState().addUserPage))
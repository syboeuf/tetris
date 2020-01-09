import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label,
} from 'reactstrap'

const JoinGame = ({ history }) => {

    const [userName, setUserName] = useState('')
    const [modal, setModal] = useState(false)

    
    const modalHeader = () => (
        <ModalHeader toggle={ closeModal }>Join game</ModalHeader>
    )

    const modalBody = () => (
        <ModalBody>
            <Label for="username">Username :</Label>{' '}
            <Input
                type="text"
                value={ userName }
                placeholder='Set your username !'
                id="username"
                onChange={ (e) => setUserName(e.target.value) }
            />
            liste des rooms existantes, fonction a faire quand le serveur sera créé
        </ModalBody>
    )

    const modalFooter = () => (
        <ModalFooter>
            <Button color='danger' onClick={ () => closeModal() }>Cancel</Button>
            <Button color='primary' onClick={ () => closeModal() }>Join game</Button>
        </ModalFooter>
    )

    const closeModal = () => {
        setUserName('')
        setModal(false)
    }

    return (
        <div>
            <Modal isOpen={ modal }  toggle={ closeModal }>
                { modalHeader() }
                { modalBody() }
                { modalFooter() }
            </Modal>
            <Button onClick={ () => setModal(true) }>Join game !</Button>
        </div>
    )

}

export default withRouter(JoinGame)
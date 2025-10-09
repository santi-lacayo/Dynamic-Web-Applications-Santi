import {useState} from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const ModalPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setModalOpen(true)
  }

  const handleCloseClick = () => {
    setModalOpen(false)
  }

  const modalContent = <p>This is modal content populated by children prop!</p>

  const actionBar = (
        <>
        <Button             
        success
        outline
        onClick={() => {
            console.log('other button function fired')
        }}
        className="mr-8"
        >
            Some prompt...
        </Button>
        <Button danger outline onClick={handleCloseClick}>

        </Button>
        </>
    )
    return (
        <div>
            <Button onClick={handleClick} success>Open Modal!</Button>
            {modalOpen && <Modal onClose={handleCloseClick}></Modal>}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit orci. Cras dignissim non tortor sit amet mollis. 
            Vestibulum at risus neque. Cras pellentesque, libero vel varius placerat, magna felis maximus turpis, ac placerat augue erat eget mauris. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra dolor ac pellentesque laoreet. 
            Aliquam lacinia dignissim tortor, id ultrices urna pellentesque at. Sed at arcu turpis. Sed viverra lorem sit amet facilisis mollis. 
            Praesent tellus nunc, convallis sed neque non, molestie pharetra turpis. Mauris id molestie magna, sit amet convallis orci. Donec varius erat et metus dignissim cursus. 
            </p>
            <Button onClick={handleClick} success rounded>
                Open Modal!
            </Button>
            const actionBar = (
            {modalOpen && (
                <Modal onClose={handleCloseClick} actionBar={actionBar} crazy>
                {modalContent}
                </Modal>
            )}
        </div>
    )
}

export default ModalPage
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewNewTransactionModal: () => void
}

export function Header({ onOpenNewNewTransactionModal } : HeaderProps){
    return (
        <Container>
            <Content>
                <img src={ logoImg } alt="dtMoney" />
                <button type="button" onClick={ onOpenNewNewTransactionModal }>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}
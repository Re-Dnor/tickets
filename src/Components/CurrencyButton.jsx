import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

function CurrencyButton({ticket, setShowModal}) {
  const { currency } = useSelector((state) => state.tickets);

  const getValue = (num) => {
    switch (currency) {
      case 'rub':
        return `${num} ₽`;
      case 'usd': {
        return `${Math.round(num / 61)} $`;
      }
      case 'eur': {
        return `${Math.round(num / 62)} €`;
      }
      default: {
        return `${num} ₽`;
      }
    }
  }

  return ( 
  <Button
    className='mt-3'
    variant="primary"
    onClick={() => setShowModal(true)}
  >
    Купить за {getValue(ticket.price)}
  </Button>
  );
}

export default CurrencyButton;
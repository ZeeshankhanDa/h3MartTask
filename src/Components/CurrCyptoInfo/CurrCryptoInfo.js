import React, { Component } from 'react'
import { SingleCryptoInfo } from '../SingleCryptoInfo/SingleCryptoInfo'
import { fetchCryptoCoins } from '../../features/CryptoSlice/cryptoSlice';
import "./CurrCryptoInfo.css"



import { connect } from "react-redux";


class CurrCryptoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.props.fetchCryptoCoins(page);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.props.fetchCryptoCoins(this.props.page);
    }
  }

  render() {
    const { cryptoCoins, isLoading } = this.props;
    return (
      <>
        <section className="crypto__container">
          <table className="crypto__table">
            <thead>
              <tr className="crypto__header__row">
                <td className="Cypto__Info">Rank</td>
                <td className="Cypto__Info crypto__name">Name</td>
                <td className="Cypto__Info">Price</td>
                <td className="Cypto__Info">Market Cap</td>
                <td className="Cypto__Info">VWAP (24Hr)</td>
                <td className="Cypto__Info">Supply</td>
                <td className="Cypto__Info">Volume (24Hr)</td>
                <td className="Cypto__Info">Change (24Hr)</td>
              </tr>
            </thead>
            <tbody>
              {cryptoCoins.map((cryptoCoin) => (
                <SingleCryptoInfo key={cryptoCoin.id} cryptoCoin={cryptoCoin} />
              ))}
            </tbody>
          </table>
        </section>
        <div className="more">
          <button
            onClick={() =>
              this.setState((prevState) => ({ page: prevState.page + 1 }), () =>
                this.props.fetchCryptoCoins(this.state.page)
              )
            }
            className="action__btn"
          >
            {isLoading ? 'loading...' : 'View More'}
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cryptoCoins: state.cryptoCoins.cryptoCoins,
  isLoading: state.cryptoCoins.isLoading,
});

const mapDispatchToProps = {
  fetchCryptoCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrCryptoInfo);

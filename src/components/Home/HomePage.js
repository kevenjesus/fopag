import React, { Component } from 'react';
import { connect } from "react-redux";
import SideBar from '../../SideBar';

class HomePage extends Component {
    render() {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <SideBar />
            </div>
            <div style={{ display: "flex", flexDirection: "column",marginLeft:100 }}>
          
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      token: state.LoginReducer.token,
      emAndamento: state.Indicadorreducer.emAndamento,
      aguardandoEfetivacao: state.Indicadorreducer.aguardandoEfetivacao,
      cancelados: state.Indicadorreducer.cancelados,
      efetivados: state.Indicadorreducer.efetivados,
      aguardandoEfetivacao: state.Indicadorreducer.aguardandoEfetivacao,
    };
};

const HomeConnect = connect(mapStateToProps)(HomePage);

export default HomePage;

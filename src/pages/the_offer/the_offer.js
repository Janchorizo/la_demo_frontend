import React from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  PageContainer,
  LabelCard,
} from 'components';
import style from './style.module.css';


/**
 * TheOffer page component.
 * @component
 * @return {React.Component}
 */
export default function TheOffer() {
  const {formatMessage} = useIntl();

  return (
    <PageContainer>
      <div id={style['main-container']}>
        <div id={style['main-container-title']}>
          <h1>{formatMessage({id: 'offer.main-title'})}</h1>
          <h2>{formatMessage({id: 'offer.subtitle'})}</h2>
        </div>
        <div className={style.column}>
          <h3>{formatMessage({id: 'offer.col1_title'})}</h3>
          <p>{formatMessage({id: 'offer.col1_text'})}</p>
        </div>
        <div className={style.column}>
          <h3>{formatMessage({id: 'offer.col2_title'})}</h3>
          <p>{formatMessage({id: 'offer.col2_text'})}</p>
        </div>
        <div className={style.column}>
          <h3>{formatMessage({id: 'offer.col3_title'})}</h3>
          <p>{formatMessage({id: 'offer.col3_text'})}</p>
        </div>
      </div>
      <div id={style['card']}>
        <div id={style['card-content']}>
          En ElParking, nuestra principal función es hacer más fácil la
          vida de los conductores.
          <br/>
          Llevamos más de cinco años creciendo en usuarios y funcionalidad y
          ahora mismo somos la web más completa para conductores.
          <br/>
          <br/>
          Te damos razones para trabajar con nosotros:
          <br/>
          - Tendrás la oportunidad de participar en el desarrollo de un
            servicio que es utilizado por más de un millón y medio de personas
          <br/>
          <div className={style.labeled} id='offer-ideas'>
          - Trabajarás en un ambiente colaborativo donde tus ideas tendrán
          cabida
          </div>
          <br/>
          - Nos preocupamos mucho por escribir buen código, preferimos calidad
            a cantidad.
          <br/>
          <div className={style.labeled} id='offer-ci'>
          - Creemos en la integración continua y nuestro código está
          cubierto de tests
            <br/>
          - Trabajamos con pull request y revisión de código
            <br/>
          </div>
          <br/>

          A qué te dedicarás:
          <br/>
          <div className={style.labeled} id='offer-fullstack'>
          - Trabajarás en los equipos de backend y frontend desarrollando
            funcionlidad para el core del sistema y para la fachada

            <br/>
          - APIs para clientes móvil y web
            <br/>
          - Integración con dichas APIs
          </div>
          <br/>
          - Construcción de parte del frontend del servicio
          <br/>
          - Integración con servicios externos
          <br/>
          <br/>

          Qué necesitas para acceder al puesto:
          <br/>
          - Experiencia en proyectos reales de dos años
          <br/>
          <div className={style.labeled} id='offer-php'>
          - PHP7
          </div>
          <br/>
          <div className={style.labeled} id='offer-db'>
          - MariaDB/MySQL, nosql
          </div>
          <br/>
          <div className={style.labeled} id='offer-react'>
          - React
            <br/>
          - Redux
          </div>
          <br/>
          <div className={style.labeled} id='offer-details'>
          - Atención a los detalles
          </div>
          <br/>
          - Saber trabajar en equipo
          <br/>
          - Test Test! Test!!
          <br/>
          - Saber aplicar buenas practicas de desarrollo software
            (clean architecture, patrones, etc)
          <br/>
          <br/>


          Qué te ofrecemos por trabajar con nosotros:
          <br/>
          - Salario competitivo: 25.000€ - 30.000€
          <br/>
          - Contrato indefinido
          <br/>
          - Equipo de trabajo top que eliges tú
          <br/>
          - Buenos compañeros
          <br/>
          - Flexibilidad de horario
          <br/>
          <div className={style.labeled} id='offer-remote'>
          - Trabajo remoto con posibilidad de trabajar en la oficina de
            Salamanca
          </div>
          <br/>
          - Formación
          <br/>
        </div>
        <div id={style['details-overlap-container']}>
          <LabelCard target='offer-ideas'>
            {formatMessage({id: 'offer.label_ideas'})}
          </LabelCard>
          <LabelCard target='offer-ci'>
            {formatMessage({id: 'offer.label_ci'})}
          </LabelCard>
          <LabelCard target='offer-fullstack'>
            {formatMessage({id: 'offer.label_fullstack'})}
          </LabelCard>
          <LabelCard target='offer-php'>
            {formatMessage({id: 'offer.label_php'})}
          </LabelCard>
          <LabelCard target='offer-db'>
            {formatMessage({id: 'offer.label_db'})}
          </LabelCard>
          <LabelCard target='offer-react'>
            {formatMessage({id: 'offer.label_react'})}
          </LabelCard>
          <LabelCard target='offer-details'>
            {formatMessage({id: 'offer.label_details'})}
          </LabelCard>
          <LabelCard target='offer-remote'>
            {formatMessage({id: 'offer.label_remote'})}
          </LabelCard>
        </div>
      </div>
    </PageContainer>
  );
}

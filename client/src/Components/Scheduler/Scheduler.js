import React, { Component } from "react";
import API from "../../utils/API"
import injectTapEventPlugin from 'react-tap-event-plugin'
import axios from 'axios'
import async from 'async'
import moment from 'moment'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import Card from 'material-ui/Card'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import SnackBar from 'material-ui/Snackbar'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton
} from 'material-ui/Stepper'
import {
  RadioButton,
  RadioButtonGroup
} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'
import logo from './assets/images/logo.svg'

injectTapEventPlugin()
const HOST = 'http://localhost:3000/'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
    //  schedule : '',
      loading: true,
      navOpen: false,
      confirmationModalOpen: false,
      confirmationTextVisible: false,
      stepIndex: 0,
      appointmentDateSelected: false,
      appointmentMeridiem: 0,
      validEmail: true,
      validPhone: true,
      smallScreen: window.innerWidth < 768,
      confirmationSnackbarOpen: false
    }

    this.handleNavToggle = this.handleNavToggle.bind(this)
    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this)
    this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this)
    this.handleSetAppointmentMeridiem = this.handleSetAppointmentMeridiem.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validatePhone = this.validatePhone.bind(this)
    this.checkDisableDate = this.checkDisableDate.bind(this)
    this.renderAppointmentTimes = this.renderAppointmentTimes.bind(this)
    this.renderConfirmationString = this.renderConfirmationString.bind(this)
    this.renderAppointmentConfirmation = this.renderAppointmentConfirmation.bind(this)
    this.resize = this.resize.bind(this)
  }

  handleNavToggle() {
    return this.setState({ navOpen: !this.state.navOpen })
  }

  handleNextStep() {
    const { stepIndex } = this.state
    return (stepIndex < 3) ? this.setState({ stepIndex: stepIndex + 1}) : null
    console.log('handke step' , this.state)
  }

  handleSetAppointmentDate(date) {
    console.log(this.state)
    this.handleNextStep()
    this.setState({ appointmentDate: date, confirmationTextVisible: true , appointmentDateSelected:true,  stepIndex : 1} , () =>console.log(this.state))
    
  }

  handleSetAppointmentSlot(slot) {
    this.handleNextStep()
    this.setState({ appointmentSlot: slot })
  }

  handleSetAppointmentMeridiem(meridiem) {
    this.setState({ appointmentMeridiem: meridiem ,  stepIndex : 2 } , () =>console.log(this.state))
  }

  handleFetch(response) {
    const appointments  = response;

    console.log(appointments , 'apts handle fetch')
    const initSchedule = {}
    const today = moment().startOf('day')
    initSchedule[today.format('YYYY-DD-MM')] = true
    const schedule = !appointments.length ? initSchedule : appointments.reduce((currentSchedule, appointment) => {
      const { date, slot } = appointment
      const dateString = moment(date, 'YYYY-DD-MM').format('YYYY-DD-MM')
      !currentSchedule[date] ? currentSchedule[dateString] = Array(8).fill(false) : null
      Array.isArray(currentSchedule[dateString]) ?
        currentSchedule[dateString][slot] = true : null
      return currentSchedule
    }, initSchedule)

    //Imperative x 100, but no regrets
    for (let day in schedule) {
      let slots = schedule[day]
      slots.length ? (slots.every(slot => slot === true)) ? schedule[day] = true : null : null
    }

    // this.setState({
    //   schedule,
    //   siteTitle: configs.site_title,
    //   aboutPageUrl: configs.about_page_url,
    //   contactPageUrl: configs.contact_page_url,
    //   homePageUrl: configs.home_page_url,
    //   loading: false
    // })
  }

  handleFetchError(err) {
    console.log(err)
    this.setState({ confirmationSnackbarMessage: 'Error fetching data', confirmationSnackbarOpen: true })
  }

  handleSubmit() {
    const appointment = {
      date: moment(this.state.appointmentDate).format('YYYY-DD-MM'),
      slot: this.state.appointmentSlot,
      name: this.state.firstName + ' ' + this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    }
    API.createAppointment(appointment)
    .then(response => this.setState({ confirmationSnackbarMessage: "Appointment succesfully added!", confirmationSnackbarOpen: true, processed: true }))
    .catch(err => {
      console.log(err)
      return this.setState({ confirmationSnackbarMessage: "Appointment failed to save.", confirmationSnackbarOpen: true })
    })
    // axios.post(HOST + 'api/appointments', appointment)
    // .then(response => this.setState({ confirmationSnackbarMessage: "Appointment succesfully added!", confirmationSnackbarOpen: true, processed: true }))
    // .catch(err => {
    //   console.log(err)
    //   return this.setState({ confirmationSnackbarMessage: "Appointment failed to save.", confirmationSnackbarOpen: true })
    // })
  }

  validateEmail(email) {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return regex.test(email) ? this.setState({ email: email, validEmail: true }) : this.setState({ validEmail: false })
  }

  validatePhone(phoneNumber) {
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    return regex.test(phoneNumber) ? this.setState({ phone: phoneNumber, validPhone: true }) : this.setState({ validPhone: false })
  }

  checkDisableDate(day) {
    const dateString = moment(day).format('YYYY-DD-MM')
    return   moment(day).startOf('day').diff(moment().startOf('day')) < 0
  }

  renderConfirmationString() {
    const spanStyle = {color: '#00bcd4'}
    return this.state.confirmationTextVisible ? <h2 style={{ textAlign: this.state.smallScreen ? 'center' : 'left', color: '#bdbdbd', lineHeight: 1.5, padding: '0 10px', fontFamily: 'Roboto'}}>
      { <span>
        Scheduling a

          <span style={spanStyle}> 1 hour </span>

        appointment {this.state.appointmentDate && <span>
          on <span style={spanStyle}>{moment(this.state.appointmentDate).format('dddd[,] MMMM Do')}</span>
      </span>} {Number.isInteger(this.state.appointmentSlot) && <span>at <span style={spanStyle}>{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></span>}
      </span>}
    </h2> : null
  }

  renderAppointmentTimes() {
    if (!this.state.loading) {
      const slots = [...Array(8).keys()]
      return slots.map(slot => {
        const appointmentDateString = moment(this.state.appointmentDate).format('YYYY-DD-MM')
        const t1 = moment().hour(9).minute(0).add(slot, 'hours')
        const t2 = moment().hour(9).minute(0).add(slot + 1, 'hours')
        const scheduleDisabled = this.state.schedule[appointmentDateString] ? this.state.schedule[moment(this.state.appointmentDate).format('YYYY-DD-MM')][slot] : false
        const meridiemDisabled = this.state.appointmentMeridiem ? t1.format('a') === 'am' : t1.format('a') === 'pm'
        return <RadioButton
          label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')}
          key={slot}
          value={slot}
          style={{marginBottom: 15, display: meridiemDisabled ? 'none' : 'inherit'}}
          disabled={scheduleDisabled || meridiemDisabled}/>
      })
    } else {
      return null
    }
  }

  renderAppointmentConfirmation() {
    const spanStyle = { color: '#00bcd4' }
    return <section>
      <p>Name: <span style={spanStyle}>{this.state.firstName} {this.state.lastName}</span></p>
      <p>Number: <span style={spanStyle}>{this.state.phone}</span></p>
      <p>Email: <span style={spanStyle}>{this.state.email}</span></p>
     
    </section>
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth < 768 })
  }

  componentWillMount() {

        API.getAppointments()
        .then(res => {
          this.handleFetch(res.data)
          console.log('res appta' , res.data)
          }
   
        )}

  componentWillUnmount() {
    //removeEventListener('resize', this.resize)
  }

  render() {
    const { stepIndex, loading, navOpen, smallScreen, confirmationModalOpen, confirmationSnackbarOpen, ...data } = this.state
    const contactFormFilled = data.firstName && data.lastName && data.phone && data.email && data.validPhone && data.validEmail
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={() => this.setState({ confirmationModalOpen : false})} />,
      <FlatButton
        label="Confirm"
        primary={true}
        onClick={() => this.handleSubmit()} />
    ]
    console.log(data)
    return (
     
        
      

      <div>
      
        <Drawer
          docked={false}
          width={300}
          open={navOpen}
          onRequestChange={(navOpen) => this.setState({navOpen})} >
      
          <a style={{textDecoration: 'none'}} href={this.state.homePageUrl}><MenuItem>Home</MenuItem></a>
          <a style={{textDecoration: 'none'}} href={this.state.aboutPageUrl}><MenuItem>About</MenuItem></a>
          <a style={{textDecoration: 'none'}} href={this.state.contactPageUrl}><MenuItem>Contact</MenuItem></a>

          <MenuItem disabled={true}
                    style={{
                      marginLeft: '50%',
                      transform: 'translate(-50%)'
                    }}>
            {"© Copyright " + moment().format('YYYY')}</MenuItem>
        </Drawer>
        <section style={{
            maxWidth: !smallScreen ? '80%' : '100%',
            margin: 'auto',
            marginTop: !smallScreen ? 20 : 0,
          }}>
          {this.renderConfirmationString()}
          <Card style={{
              padding: '10px 10px 25px 10px',
              height: smallScreen ? '100vh' : null
            }}>
            <Stepper
              activeStep={stepIndex}
              linear={false}
              orientation="vertical">
              <Step disabled={loading}>
                <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                  Choose an available day for your appointment
                </StepButton>
                <StepContent>
                  <DatePicker
                      style={{
                        marginTop: 10,
                        marginLeft: 10
                      }}
                      value={data.appointmentDate}
                      hintText="Select a date"
                      mode={smallScreen ? 'portrait' : 'landscape'}
                      onChange={(n, date) => this.handleSetAppointmentDate(date)}
                      shouldDisableDate={day => this.checkDisableDate(day)}
                       />
                  </StepContent>
              </Step>
              <Step disabled={ !data.appointmentDate }>
                <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                
                </StepButton>
             
                <StepContent>
                  <section>
                    <TextField
                      style={{ display: 'block' }}
                      name="first_name"
                      hintText="First Name"
                      floatingLabelText="First Name"
                      onChange={(evt, newValue) => this.setState({ firstName: newValue })}/>
                    <TextField
                      style={{ display: 'block' }}
                      name="last_name"
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      onChange={(evt, newValue) => this.setState({ lastName: newValue })}/>
                    <TextField
                      style={{ display: 'block' }}
                      name="email"
                      hintText="name@mail.com"
                      floatingLabelText="Email"
                      errorText={data.validEmail ? null : 'Enter a valid email address'}
                      onChange={(evt, newValue) => this.validateEmail(newValue)}/>
                    <TextField
                      style={{ display: 'block' }}
                      name="phone"
                      hintText="(888) 888-8888"
                      floatingLabelText="Phone"
                      errorText={data.validPhone ? null: 'Enter a valid phone number'}
                      onChange={(evt, newValue) => this.validatePhone(newValue)} />
                      <TextField
                      style={{ display: 'block' }}
                      name="appointmentSlot"
                      
                      floatingLabelText="Suggest a Time"
                      errorText={data.appointmentSlot ? null: 'Enter a valid phone number'}
                      onChange={(evt, newValue) => this.setState({ appointmentSlot : newValue })}/>
                    <RaisedButton
                      style={{ display: 'block' }}
                      label={contactFormFilled ? 'Schedule' : 'Fill out your information to schedule'}
                      labelPosition="before"
                      primary={true}
                      fullWidth={true}
                      onClick={() => this.setState({ confirmationModalOpen: !this.state.confirmationModalOpen })}
                      disabled={!contactFormFilled || data.processed }
                      style={{ marginTop: 20, maxWidth: 100}} />
                  </section>
                </StepContent>
              </Step>
            </Stepper>
          </Card>
          <Dialog
            modal={true}
            open={confirmationModalOpen}
            actions={modalActions}
            title="Confirm your appointment">
            {this.renderAppointmentConfirmation()}
          </Dialog>
         
        </section>
      </div>
    )
  }
}
import Button from './Button'

const AddTask = () => {
  return (
    <form>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input type='date' />
      </div>
      <div className='form-control-check'>
        <input type='checkbox' />
        <label>Set Reminder</label>
      </div>
      <Button classInsert='btn-block form-control' text='Save Task'/>
    </form>
  )
}

export default AddTask

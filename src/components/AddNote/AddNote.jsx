

const AddNote = () => {
  return (
    <>
      <h2>Take Notes While Reviewing the Video</h2>
      <form action="">
        <select name="unit" >
          <option value="1" selected>Unit 1</option>
          <option value="2">Unit 2</option>
          <option value="3">Unit 3</option>
          <option value="4">Unit 4</option>
        </select>
        <textarea type="text" name="content" id="" cols="30" rows="10" placeholder="Insert Notes Here..."></textarea>
      </form>
    </>
  );
}

export default AddNote;
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
const { useState } = React;

// ! Subject
// ! Open
// ? How should we store instances of the record
// ? * looks like we should have a Message template (uniq) - this should have an array of message instances
// ? * and then also instances when it was sent. How the conversation went. Responses. Time sent
// ! Times sent
// ! End in Date bool
// ! Response -- haha, single word answer, actually something carrying the conversation

const Layout = styled.div`
  display: grid;
  grid-template-rows: 40px 40px 1fr 30px;
  height: 100%;
`;

export default props => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState("");
  console.log(subject, message);

  return (
    <Layout>
      <TextInput
        title="Title"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <TextInput
        title="Subject"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <TextArea value={notes} onChange={e => setNotes(e.target.value)} />
    </Layout>
  );
};

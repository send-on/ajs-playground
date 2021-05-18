import logo from './logo.svg';
import './App.css';
import { Table, Pane, Textarea, Label } from 'evergreen-ui'

function ControlledTextareaExample() {
  const [value, setValue] = React.useState('')
  return <Textarea onChange={(e) => setValue(e.target.value)} value={value} />
}

function App() {  
  return (
    <div className="container mx-left m-8 w-8/12">

      <Table.Body>
        <Table.Head>
          <Table.TextCell flexBasis={250} flexShrink={0} flexGrow={0}>
            Type
          </Table.TextCell>
          <Table.TextCell>UserID</Table.TextCell>
          <Table.TextCell>Body</Table.TextCell>
        </Table.Head>
        <Table.Body>
          <Table.Row height="auto" paddingY={12}>
            <Table.TextCell flexBasis={250} flexShrink={0} flexGrow={0}>
              Dropdown here
            </Table.TextCell>
            <Table.TextCell>userID</Table.TextCell>
            <Table.TextCell>
            <Pane>
              <Textarea id="textarea-2" placeholder="{ .... }" />
            </Pane>
            </Table.TextCell>
          </Table.Row>
        </Table.Body>
      </Table.Body>

      
    </div>
  );
}

export default App;


import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CodeBlock = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('java');

  const javaCode = `
public class SortingExample {
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 5, 6};
        
        // Bubble Sort
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        // Print sorted array
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
  `;

  const pythonCode = `
def bubble_sort(arr):
    for i in range(len(arr) - 1):
        for j in range(len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

arr = [5, 2, 9, 1, 5, 6]
sorted_arr = bubble_sort(arr)
print(sorted_arr)
  `;

  const jsCode = `
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [5, 2, 9, 1, 5, 6];
const sortedArr = bubbleSort(arr);
console.log(sortedArr);
  `;

  const getCode = (language) => {
    switch (language) {
      case 'java':
        return javaCode;
      case 'python':
        return pythonCode;
      case 'js':
        return jsCode;
      default:
        return javaCode;
    }
  };

  const getLanguageStyle = (language) => {
    switch (language) {
      case 'java':
        return solarizedlight;
      case 'python':
        return vs;
      case 'js':
        return solarizedlight;
      default:
        return solarizedlight;
    }
  };

  return (
    <div className="container mt-5">
      <h3>Select Language and View Code</h3>
      
      {/* Dropdown for language selection */}
      <Dropdown onSelect={(e) => setSelectedLanguage(e)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="java">Java</Dropdown.Item>
          <Dropdown.Item eventKey="python">Python</Dropdown.Item>
          <Dropdown.Item eventKey="js">JavaScript</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Code block with syntax highlighting */}
      <SyntaxHighlighter language={selectedLanguage} style={getLanguageStyle(selectedLanguage)} className="mt-4 rounded">
        {getCode(selectedLanguage)}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

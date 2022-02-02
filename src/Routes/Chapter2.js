import Accordion from 'react-bootstrap/Accordion'

const Chapter2 = () => {
    return (
        <div className='chapterContainer'>
            <div className='chapterContent'>
                <div className='chapterTitle'>
                    <h1>linked list</h1>
                </div>
                <div className='chapterSection'>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Binary Heaps</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>a Min Heap is in desc order and vice-versa</li>
                                    <li>a Binary Heap is a Complete Binary Tree except for the last level and right most node</li>
                                    <li>in a Min Heap, each node is smaller than it's children</li>
                                    <li>this means the Root is the smallest value</li>
                                </ul>
                                <br></br>
                                Key operations:
                                <ol>
                                    <li>Insert: insert bottom, rightmost node @ <span className='tc'>O(log n)</span></li>
                                    <li>Extract Min: swap min with last, then bubble down swapping @ <span className='tc'>O(log n)</span></li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Tries/Prefix Trees</Accordion.Header>
                            <Accordion.Body>
                                Trie stuff
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='chapterLegend'>
                <h3>Legend</h3>
            </div>

        </div>
    )
}

export default Chapter2;
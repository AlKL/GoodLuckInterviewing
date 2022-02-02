import Accordion from 'react-bootstrap/Accordion';

const Graphs = () => {
    return (
        <div className='chapterContainer'>
            <div className='chapterContent'>
                <div className='chapterTitle'>
                    <h1>graphs</h1>
                </div>
                <div className='chapterSection'>
                    <Accordion defaultActiveKey={['2']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Trees</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>trees do not have a cycle</li>
                                    <li>a given node is a leaf if it has 0 children</li>
                                    <li>a <span className='red'>Binary Tree's</span> nodes has a max of 2 children</li>
                                    <li>a <span className='red'>Binary Search Tree's</span> nodes are ordered in one way or another (usually left less than parent)</li>
                                    <li><span className='red'>Balanced Trees</span> are considered balanced if each node's left and right heights differ by a maximum of 1</li>
                                    <li><span className='red'>Balanced Trees</span> achieve <span className='tc'>O(log n)</span> insert and find operations</li>
                                    <li>examples of <span className='red'>Balanced Trees:</span> Red and Black Trees, AVL Trees</li>
                                    <li>in a <span className='red'>Complete Binary Tree</span>, each node has 2 children except the last level</li>
                                    <li>the last level in a <span className='red'>Complete Binary Tree</span> must be filled left to right</li>
                                    <li>in a <span className='red'>Full Binary Tree</span>, each node has 0 or 2 children</li>
                                    <li>in a <span className='red'>Full And Complete Binary Tree</span>, each node has two children, except the last level which is completely filled</li>
                                    <li>a <span className='red'>Full And Complete Binary Tree</span> has a maximum of (2^k - 1) nodes</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Tree Traversal</Accordion.Header>
                            <Accordion.Body>
                                Ideally when traversing through a tree BST, you want to perform tasks in O(h)

                                <img alt='traversal' src='https://leetcode.com/articles/Figures/145_transverse.png'></img>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Recursion</Accordion.Header>
                            <Accordion.Body>
                                In recursion you need:
                                <ol>
                                    <li>Base case</li>
                                    <li>Recursive case</li>
                                </ol>
                                Recursion is useful for tree-like structures and for backtracking
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Graphs</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>trees are connected gtaphs without cycles</li>
                                    <li>a graph is just a collection of nodes</li>
                                    <li>graphs are directed or undirected (one way vs two way streets)</li>
                                    <li>graphs may have multiple isolated/non-connecting graphs</li>
                                    <li>they can also have cycles or not(acyclic)</li>
                                </ul>
                                <br></br>
                                Two ways to represent graphs:
                                <ol>
                                    <li>Adjacency List</li>
                                    <ul>
                                        <li>if the graph is undirected, (a,b) shows twice, ie. a -&gt; b and b -&gt; a</li>
                                        <li>the data structure would just be an array of nodes</li>
                                        <pre>1    class Graph:</pre>
                                        <pre>2        Node[] nodes = [] </pre>
                                        <pre>3    </pre>
                                        <pre>4    class Node:</pre>
                                        <pre>5        str Name</pre>
                                        <pre>6        Node[] children</pre>
                                    </ul>
                                    <li>Adjacency Matrix</li>
                                    <ul>
                                        <li>N*N matrix where N = # of nodes</li>
                                        <li>True or 1 would indicate an edge exists from i -&gt; j</li>
                                        <li>an undirected graph would have a symmetric matrix</li>
                                    </ul>
                                </ol>
                                Tradeoffs:
                                <ul>
                                    <li>in a list, you can quickly identify neighbors</li>
                                    <li>in a matrix, you need to interate through all nodes in order to find all neighbours</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Graph Traversal</Accordion.Header>
                            <Accordion.Body>
                                Breath First Search:
                                <ul>
                                    <li>starts at the root, and explores each neighbor first</li>
                                    <li>use BFS to find the shortest/any existing path between two nodes</li>
                                    <li>is not recursive and uses a queue</li>
                                    <li>is not implemented recursively</li>
                                </ul>
                                <br></br>
                                Depth First Search:
                                <ul>
                                    <li>starts at the root, explore each branch</li>
                                    <li>use DFS if you'd like to visit every node in the graph</li>
                                    <li>is pre-order traversal with a visited flag</li>
                                </ul>
                                <br></br>
                                Bi-directional Search:
                                <ul>
                                    <li>finds the shortest path between the source and destination</li>
                                    <li>uses BFS from both the source and destination</li>
                                    <li>when they collide, that means there exists a path</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                            <Accordion.Header>Complexity Table</Accordion.Header>
                            <Accordion.Body>
                                Topological Sort/Modified DFS O(V+E) TC:
                                <table className='table'>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default Graphs;
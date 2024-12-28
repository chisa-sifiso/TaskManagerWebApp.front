
<body>

<h1>📋 Task Manager Frontend</h1>
<p>This is the frontend application for the Task Manager API. Built with React, it allows users to manage tasks by performing CRUD operations (Create, Read, Update, and Delete).</p>

<h2>📋 Features</h2>
<ul>
  <li>Add a new task</li>
  <li>View all tasks</li>
  <li>Edit an existing task</li>
  <li>Delete a task</li>
</ul>

<h2>🛠️ Setup Instructions</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (version 14 or higher)</li>
  <li>npm or yarn</li>
  <li>A running backend API (Task Manager API)</li>
</ul>

<h3>Steps to Run</h3>
<ol>
 
  <li>Navigate to the project directory:
    <pre><code>cd task-manager-frontend</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm start</code></pre>
  </li>
  <li>Access the app in your browser at <code>http://localhost:3000</code>.</li>
</ol>

<h2>📚 Components</h2>

<h3>TaskForm</h3>
<p>This component is used to add or edit tasks. It provides fields for <code>title</code>, <code>description</code>, <code>status</code>, and <code>due date</code>.</p>

<h3>TaskList</h3>
<p>This component displays all tasks and provides options to delete or edit a task.</p>

<h2>📂 Project Structure</h2>
<ul>
  <li><code>src/components/</code>: Contains React components like <code>TaskForm</code> and <code>TaskList</code>.</li>
  <li><code>src/services/</code>: Contains the API service (<code>api.js</code>) for communicating with the backend.</li>
  <li><code>src/App.js</code>: The main app file where components are integrated.</li>
</ul>

<h2>🔗 Backend Integration</h2>
<p>This React application interacts with the backend Task Manager API hosted at <code>http://localhost:8080/api</code>. Ensure the backend is running before using the frontend.</p>

<h2>🎨 Styling</h2>
<p>The frontend includes basic CSS styling. To modify styles, edit the CSS files located in the <code>src/</code> folder. For the form, custom styles are applied in <code>TaskForm.css</code>.</p>

<h2>🤝 Contributing</h2>
<p>Sifiso vinjwa .</p>

<h2>📄 License</h2>
<p>This project is licensed under the MIT License.</p>


</body>
</html>

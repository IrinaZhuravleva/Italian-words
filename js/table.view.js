 const tableViewController = (function () {
     //Переменные на странице
     const DOMstrings = {
         nav: 'a[data-name]',
         body: 'body',
       
         tableBody: '#requests-table tbody',
     };

     const requestsTable = document.querySelector('#requests-table tbody');

     function setTable(arr) {
         document.querySelector('#requests-table tbody').innerHTML = '';
         arr.forEach(function (item) {
             

             requestsTable.insertAdjacentHTML('beforeend', `
                <tr>
                    <th scope="row">${item.id}</th>
                   
                    <td>${item.word}</td>
                    <td>${item.translation}</td>
                    
                    <td>
                        <button onClick={alert'ok'}></button>
                    </td>
                </tr>
            `);
         });
     }

     function createLink(item) {
         if (item.status === "archived") {
             return ""
         }
         return `
            <a
                href="03-crm-edit-bid.html?request=${item.id}"
                data-id="${item.id}"
                class="link">Редактировать</a>
        `
     }

     return {
         setTable: setTable,
         getDOM: function () {
             return DOMstrings;
         }
     }
 })();

import mysql, { Connection } from "mysql2/promise";

export async function initDataBase(): Promise<Connection | null> {
    let connection: Connection | null = null;
  
    try {
        connection = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            password: 'sho0O-a+z1#Lpd(./y%f',
            user: "editor",
            database: "Products",
        });
    } catch (e: any) {
        console.error(e.message || e);
        return null;
    }
  
    console.log(`Connection to DB ProductsApplication established`);
    return connection;
}






































// https://sidorares.github.io/node-mysql2/docs

// import mysql, { RowDataPacket } from 'mysql2';

// // create a new MySQL connectionjs
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     password: 'sho0O-a+z1#Lpd(./y%f',
//     user: 'editor',
//     database: 'products',
// });
// // connect to the MySQL database
// connection.connect((error) => {
//     if (error) {
//         console.error('Error connecting to MySQL database:', error);
//     } else {
//         console.log(`Connected to MySQL database!\n\n\n`);
//     }
// });

// execute will internally call prepare and query
// const user__ID = 12345
// connection.execute('SELECT * FROM products', function (error, results, fields) {
//     console.log(results);
// });







//! =============================================================================== 
// const targetId = 'a3d0fa3b-8e2c-4d19-bf2a-950b8c998a58';

// // Выполняем SELECT-запрос с условием WHERE по ID
// const query = `SELECT * FROM products WHERE product_id = '${targetId}'`;

// connection.execute(query, function (error, results: RowDataPacket[], fields) {
//     if (error) {
//         console.error('Error executing query:', error);
//     } else {
//         if (results.length > 0) {
//             console.log(`Element by ID ${targetId} is found:`, results);
            
//             // Если есть результаты и targetId найден, прислать title
//             const foundProduct = results[0];
//             const { product_id, title } = foundProduct;
            
//             console.log(`Title by ID ${product_id}: ${title}`);
//         } else {
//             console.log(`Element by ID ${targetId} is not found.`);
//         }
//     }
//     // Connection end
//     connection.end();
// });
import React from 'react';
import { useSelector } from 'react-redux';

export default function ListProduct() {
    const products = useSelector((state: any) => state.products);

    return (
        <div className="list-user">
            <h2>Danh sách người dùng</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.quatity}</td>
                            <td>
                                <button>Xóa</button>
                                <button>Sửa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
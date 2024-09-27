import ArticleLayout from "@/components/Layouts/ArticleLayout";
export default function Articles() {
  const links = ["AI"];
  return (
    <ArticleLayout links={links}>
      <>
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Regresi Linear: Sebuah Pengantar
        </h1>
        <p className="mb-4">
          Regresi linear adalah salah satu metode statistik yang paling mendasar
          dan umum digunakan dalam analisis data untuk memodelkan hubungan
          antara dua atau lebih variabel. Pada intinya, regresi linear mencoba
          menemukan hubungan linier antara variabel independen (X) dan variabel
          dependen (Y). Model ini diasumsikan dalam bentuk garis lurus, yaitu:
        </p>
        <pre className="whitespace-pre-wrap text-gray-700">
          {"        "}Y = a + bX + e{"\n"}
          {"      "}
        </pre>
        <p className="mb-4">Di mana:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Y</strong>: variabel dependen (yang ingin diprediksi)
          </li>
          <li>
            <strong>X</strong>: variabel independen (faktor yang mempengaruhi Y)
          </li>
          <li>
            <strong>a</strong>: konstanta (intercept)
          </li>
          <li>
            <strong>b</strong>: koefisien regresi (slope) yang menggambarkan
            perubahan Y untuk setiap perubahan unit dalam X
          </li>
          <li>
            <strong>e</strong>: error atau residual yang tidak bisa dijelaskan
            oleh model
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Aplikasi Regresi Linear
        </h2>
        <p className="mb-4">
          Regresi linear banyak digunakan di berbagai bidang untuk memprediksi
          hasil atau tren masa depan, seperti:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Ekonomi</strong>: Memodelkan hubungan antara harga barang
            dengan permintaan.
          </li>
          <li>
            <strong>Pemasaran</strong>: Menghubungkan pengeluaran iklan dengan
            peningkatan penjualan.
          </li>
          <li>
            <strong>Kesehatan</strong>: Menganalisis hubungan antara konsumsi
            kalori dan berat badan.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Asumsi Utama dalam Regresi Linear
        </h2>
        <p className="mb-4">
          Beberapa asumsi dasar yang harus dipenuhi agar regresi linear
          memberikan hasil yang valid, antara lain:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Linearitas</strong>: Hubungan antara X dan Y harus linier.
          </li>
          <li>
            <strong>Independensi</strong>: Observasi satu sama lain harus
            independen.
          </li>
          <li>
            <strong>Homoskedastisitas</strong>: Varians error harus konstan di
            seluruh rentang X.
          </li>
          <li>
            <strong>Normalitas Residual</strong>: Error harus mengikuti
            distribusi normal.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Kelebihan dan Keterbatasan
        </h2>
        <p className="mb-4">
          Kelebihan utama dari regresi linear adalah kesederhanaannya dan
          kemudahannya untuk diinterpretasikan. Namun, model ini juga memiliki
          keterbatasan, seperti tidak cocok untuk data non-linier dan sangat
          rentan terhadap outlier yang dapat merusak model.
        </p>
        <p className="mb-4">
          Regresi linear tetap menjadi dasar bagi metode prediksi yang lebih
          kompleks seperti regresi polinomial dan regresi logistik, serta
          menjadi fondasi dalam banyak algoritma machine learning.
        </p>
      </>
    </ArticleLayout>
  );
}

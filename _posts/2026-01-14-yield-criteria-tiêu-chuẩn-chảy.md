---
layout: post
title: "Yield Criteria: Tiêu chuẩn chảy"
description: Mô tả về tiêu chuẩn chảy của vật liệu
date: 2026-01-14T23:41:00.000+09:00
tags: metal forming, plasticity
categories: metal forming
---


## 1. Xuất phát điểm trực quan

* Trong thí nghiệm kéo một trục, vật liệu bắt đầu biến dạng dẻo khi ứng suất vượt quá **giới hạn chảy (yield stress)**.
* Tuy nhiên, ngoài thực tế, vật liệu hiếm khi chỉ chịu kéo đơn trục; nó thường chịu **trạng thái ứng suất phức tạp 3D** (kéo – nén – cắt đồng thời).
* Vì vậy, chỉ một giá trị yield stress trong thí nghiệm kéo **không đủ** để mô tả chảy dẻo trong mọi tình huống tải.

## 2. Vì sao cần tiêu chuẩn chảy (Yield criteria)

* Mục đích chính: **xác định điều kiện mà vật liệu bắt đầu chảy dẻo** dưới trạng thái ứng suất tổng quát.
* Chuyển ý tưởng “vượt quá giới hạn chảy” từ kéo đơn trục sang **ứng suất đa trục**.
* Trả lời câu hỏi cốt lõi:

> Với tổ hợp ứng suất hiện tại, vật liệu **đang đàn hồi hay đã chảy dẻo?**

* Là cơ sở cho:

  * mô phỏng số (FEM)
  * thiết kế khuôn dập, cán, kéo
  * dự đoán biến dạng, nứt, oằn

## 3. Các tiêu chuẩn chảy thường gặp (so sánh vật lý)

* **Von Mises (Mises yield)**

  * Giả thiết: vật liệu đẳng hướng, kim loại dẻo
  * Chảy phụ thuộc vào **năng lượng biến dạng lệch** (shear distortion energy)
  * Không phụ thuộc áp suất thủy tĩnh
  * Dùng nhiều trong thép, nhôm
* **Tresca (Maximum shear stress)**

  * Chảy xảy ra khi **ứng suất cắt cực đại** đạt tới giá trị tới hạn
  * Dễ hình dung nhưng ít mượt hơn Von Mises trong tính toán số
* **Hill-48 (Hill’s quadratic yield criterion)**

  * Mở rộng Von Mises cho **vật liệu dị hướng tấm kim loại cán**
  * Cho phép mô tả khác nhau theo hướng rolling / transverse / thickness
* **Barlat 1989/2000 (Yld2000-2d)**

  * Tiêu chuẩn chảy tiên tiến cho **dị hướng mạnh**
  * Dùng cho nhôm, thép tấm độ bền cao, ô tô
  * Mô tả tốt hơn phi tuyến dị hướng

👉 Tóm tắt vật lý:

* Von Mises, Tresca: đẳng hướng
* Hill-48, Barlat-2000: dị hướng tấm kim loại

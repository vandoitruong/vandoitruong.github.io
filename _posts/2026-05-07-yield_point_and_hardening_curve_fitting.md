---
layout: post
title: "Yield Point and hardening curve fitting: điểm chảy và khớp đường cong hóa bền"
description: Mô tả về cách tìm điểm chảy và khớp đường cong hóa bền
date: 2026-01-13T14:41:00.000Z
tags: metal forming, plasticity
categories: metal forming
toc:
  sidebar: right
---

Trong bài này mình sẽ giới thiệu về cách xác định điểm chảy và làm sao khớp đường cong hóa bềng.

## 1. Introduction

Trong phân tích cơ tính vật liệu, đặc biệt là tensile test và finite element analysis (FEA), hai bước rất quan trọng là:

1. Xác định yield point (yield stress)
2. Xây dựng hardening curve (stress–plastic strain relationship)

Các dữ liệu này được dùng trong:
- Material characterization
- Plasticity modeling
- Metal forming simulation
- Structural FEA
- Constitutive model calibration

---

# 2. Engineering Stress–Strain vs True Stress–Strain

Dữ liệu từ tensile test thường ở dạng engineering stress–strain.

## Engineering Stress

\[
\sigma_{eng}=\frac{F}{A_0}
\]

## Engineering Strain

\[
\epsilon_{eng}=\frac{L-L_0}{L_0}
\]

Trong đó:
- \(F\): force
- \(A_0\): initial cross-sectional area
- \(L_0\): initial gauge length

---

# 3. Conversion to True Stress–Strain

Đối với plasticity modeling, true stress–strain thường được sử dụng.

## True Stress

\[
\sigma_{true}=\sigma_{eng}(1+\epsilon_{eng})
\]

## True Strain

\[
\epsilon_{true}=\ln(1+\epsilon_{eng})
\]

> Lưu ý: Các công thức này chỉ đúng trước necking (uniform deformation region).

---

# 4. Yield Point Determination

## 4.1 Elastic Region

Trong vùng đàn hồi:

\[
\sigma=E\epsilon
\]

Trong đó:
- \(E\): Young’s modulus

---

# 4.2 0.2% Offset Method

Đối với các vật liệu không có yield point rõ ràng (ví dụ nhôm hoặc stainless steel), yield stress thường được xác định bằng phương pháp offset 0.2%.

Offset line:

\[
\sigma=E(\epsilon-0.002)
\]

Yield stress là giao điểm giữa:
- stress–strain curve thực nghiệm
- offset line

---

# 5. Plastic Strain Calculation

Tổng strain gồm:
- elastic strain
- plastic strain

## Relationship

\[
\epsilon_{total}=\epsilon_e+\epsilon_p
\]

## True Plastic Strain

\[
\epsilon_p=\epsilon_{true}-\frac{\sigma_{true}}{E}
\]

Trong đó:
- \(\epsilon_p\): true plastic strain

---

# 6. Hardening Curve

Hardening curve là quan hệ giữa:
- true stress
- true plastic strain

Dữ liệu này được dùng trong:
- Plastic constitutive modeling
- FEA material definition

---

# 7. Common Hardening Models

## 7.1 Hollomon Law

\[
\sigma=K\epsilon_p^n
\]

Trong đó:
- \(K\): strength coefficient
- \(n\): strain hardening exponent

---

## 7.2 Ludwik Law

\[
\sigma=\sigma_Y+K\epsilon_p^n
\]

---

## 7.3 Swift Law

\[
\sigma=K(\epsilon_0+\epsilon_p)^n
\]

---

## 7.4 Voce Law

\[
\sigma=\sigma_0+Q(1-e^{-b\epsilon_p})
\]

---

# 8. Hardening Curve Fitting Workflow

* Obtain engineering stress–strain data

* Convert engineering data to true stress–strain

* Determine yield stress using 0.2% offset method

* Calculate true plastic strain

* Remove post-necking region

* Fit constitutive model

---

# 9. Example Dataset

| Plastic Strain | True Stress (MPa) |
|---|---|
| 0.002 | 520 |
| 0.005 | 560 |
| 0.010 | 610 |
| 0.020 | 680 |
| 0.050 | 820 |

---

# 10. Python Example — Yield Stress Determination

```python
import numpy as np
import matplotlib.pyplot as plt

# Example engineering strain and stress
strain = np.array([
    0.0000,
    0.0005,
    0.0010,
    0.0015,
    0.0020,
    0.0025,
    0.0030,
    0.0040,
    0.0060
])

stress = np.array([
    0,
    100,
    200,
    300,
    400,
    450,
    470,
    490,
    520
])

# Young's modulus estimation
E = 200000  # MPa

# 0.2% offset line
offset_stress = E * (strain - 0.002)

# Find yield point
idx = np.where(stress >= offset_stress)[0][0]

yield_strain = strain[idx]
yield_stress = stress[idx]

print("Yield Strain =", yield_strain)
print("Yield Stress =", yield_stress, "MPa")

# Plot
plt.plot(strain, stress, label='Experimental Curve')
plt.plot(strain, offset_stress, '--', label='0.2% Offset Line')

plt.scatter(
    yield_strain,
    yield_stress,
    label='Yield Point'
)

plt.xlabel('Strain')
plt.ylabel('Stress (MPa)')
plt.legend()
plt.grid(True)
plt.show()
```

---

# 11. Python Example — Hollomon Fitting

```python
import numpy as np
from scipy.optimize import curve_fit
import matplotlib.pyplot as plt

# Plastic strain
eps_p = np.array([
    0.002,
    0.005,
    0.010,
    0.020,
    0.050
])

# True stress
stress = np.array([
    520,
    560,
    610,
    680,
    820
])

# Hollomon model
def hollomon(eps, K, n):
    return K * eps**n

# Curve fitting
popt, pcov = curve_fit(hollomon, eps_p, stress)

K, n = popt

print("K =", K)
print("n =", n)

# Fitted curve
stress_fit = hollomon(eps_p, K, n)

# Plot
plt.plot(
    eps_p,
    stress,
    'o',
    label='Experimental'
)

plt.plot(
    eps_p,
    stress_fit,
    label='Hollomon Fit'
)

plt.xlabel('Plastic Strain')
plt.ylabel('True Stress (MPa)')
plt.legend()
plt.grid(True)
plt.show()
```

---

# 12. Python Example — Voce Fitting

```python
import numpy as np
from scipy.optimize import curve_fit
import matplotlib.pyplot as plt

# Data
eps_p = np.array([
    0.002,
    0.005,
    0.010,
    0.020,
    0.050
])

stress = np.array([
    520,
    560,
    610,
    680,
    820
])

# Voce model
def voce(eps, sigma0, Q, b):
    return sigma0 + Q * (1 - np.exp(-b * eps))

# Fit
popt, pcov = curve_fit(voce, eps_p, stress)

sigma0, Q, b = popt

print("sigma0 =", sigma0)
print("Q =", Q)
print("b =", b)

# Prediction
stress_fit = voce(eps_p, sigma0, Q, b)

# Plot
plt.plot(
    eps_p,
    stress,
    'o',
    label='Experimental'
)

plt.plot(
    eps_p,
    stress_fit,
    label='Voce Fit'
)

plt.xlabel('Plastic Strain')
plt.ylabel('True Stress (MPa)')
plt.legend()
plt.grid(True)
plt.show()
```

---

# 13. Model Comparison

Thông thường nhiều hardening models sẽ được fit và so sánh bằng:
- RMSE
- MAE
- R²

Ví dụ:

| Model | RMSE | R² |
|---|---|---|
| Hollomon | 12 MPa | 0.982 |
| Swift | 8 MPa | 0.991 |
| Voce | 5 MPa | 0.996 |

---

# 14. Important Notes

## 14.1 Before Necking Only

Engineering-to-true conversion chỉ hợp lệ trước necking.

---

## 14.2 Hardening Law Is an Approximation

Constitutive models chỉ là approximation của material behavior.

Không có model nào fit hoàn hảo toàn bộ strain range.

---

## 14.3 FEA Input

Trong nhiều FEA software:
- ABAQUS
- ANSYS

material input thường là:
- true stress
- true plastic strain

dưới dạng table.

---

# 15. Conclusion

Yield point determination và hardening curve fitting là các bước nền tảng trong:
- Material characterization
- Plasticity modeling
- Metal forming
- Finite element simulation

Quy trình chuẩn bao gồm:
1. Engineering → true conversion
2. Yield stress determination
3. Plastic strain calculation
4. Hardening curve extraction
5. Constitutive model fitting
6. Validation and comparison of fitting quality


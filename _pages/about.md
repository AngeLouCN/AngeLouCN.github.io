---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a final-year Ph.D. candidate of [Electrical and Computer Engineering](https://engineering.vanderbilt.edu/departments/electrical-computer-engineering/), [Vanderbilt University](https://www.vanderbilt.edu/), advised by [Prof. Jack Noble](https://www.vanderbilt.edu/vise/visepeople/jack-noble/). My research interest focuses on 2D/3D Computer Vision, Deep Learning and Medical Image Analysis.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

<span class='anchor' id='news'></span>

# 🔥 News
- *2024.09*: &nbsp;🎉🎉 One paper "NeuroBOLT: Resting-state EEG-to-fMRI Synthesis with Multi-dimensional Feature Mapping" was accepted by **NeurIPS 2024**!
- *2024.07*: &nbsp;🎉🎉 One paper "Divide and Fuse: Body Part Mesh Recovery from Partially Visible Human Images" was accepted by **ECCV 2024**!
- *2024.02*: &nbsp;🎉🎉 One paper "DaReNeRF: Direction-aware Representation for Dynamic Scenes" was accepted by **CVPR 2024**!
- *2023.10*: &nbsp;🎉🎉 Five paper accepted by SPIE Medical Imaging 2024!
- *2023.05*: &nbsp;🎉🎉 I will join [UII America](https://www.uii-ai.com/) as research intern this summer!
- *2023.04*: &nbsp;🎉🎉 Our paper "Min-Max Similarity: A Contrastive Semi-Supervised Deep Learning Network for Surgical Tools Segmentation" was accepted by **IEEE Transactions on Medical Imaging (IF = 11.037)**!
- *2023.01*: &nbsp;🎉🎉 Our paper "CaraNet: Context Axial Reverse Attention Network for Segmentation of Small Medical Objects" was accepted by Journal of Medical Imaging (IF = 2.4)!
- *2023.01*: &nbsp;🎉🎉 Our paper "CFPNet-M: A Light-Weight Encoder-Decoder Based Network for Multimodal Biomedical Image Real-Time Segmentation" was accepted by **Computers in Biology and Medicine (IF = 7.7)**!
- *2022.10*: &nbsp;🎉🎉 Two paper was accepted by SPIE Medical Imaging 2023!

<span class='anchor' id='publications'></span>

# 📝 Selected Publications

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023</div><img src='images/papers/High-fidelity-hand.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
High Fidelity 3D Hand Shape Reconstruction\\ via Scalable Graph Frequency Decomposition
**Tianyu Luan**, Yuanhao Zhai, Jingjing Meng, Zhong Li, Zhang Chen, Yi Xu, and Junsong Yuan
[PDF]() [Code]() [Bibtex]() -->

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">NeurIPS 2024</div><img src='images/papers/teaser_nips.gif' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">NeuroBOLT: Resting-state EEG-to-fMRI Synthesis with Multi-dimensional Feature Mapping</font></font>**

  <font face="Times New Roman">Yamin Li, <b>Ange Lou</b>, Ziyuan Xu, Roza G Bayrak, SHENGCHAO ZHANG, Shiyu Wang, Dario J. Englot, Soheil Kolouri, Daniel Moyer, Catie Chang.</font>

  <font face="Times New Roman"><em>NeurIPS 2024.</em></font>

  [\[PDF\]](https://arxiv.org/pdf/2410.05341) [\[Project Page\]](https://soupeeli.github.io/NeuroBOLT/) 
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">arXiv</div><img src='images/papers/endovis17_3.gif' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">Zero-Shot Surgical Tool Segmentation in Monocular Video Using Segment Anything Model 2</font></font>**

  <font face="Times New Roman"><b>Ange Lou</b>, Yamin Li, Yike Zhang, Robert F. Labadie, and Jack Noble</font>

  <font face="Times New Roman"><em>arXiv.</em></font>

  [\[PDF\]](https://arxiv.org/pdf/2408.01648)
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">ECCV 2024</div><img src='images/papers/ECCV24_PartBody.png' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">Divide and Fuse: Body Part Mesh Recovery from Partially Visible Human Images</font></font>**

  <font face="Times New Roman">Tianyu Luan, Zhongpai Gao, Luyuan Xie, Abhishek Sharma, Hao Ding, Benjamin Planche, Meng Zheng, <b>Ange Lou</b>, Terrence Chen, Junsong Yuan, and Ziyan Wu.</font>

  <font face="Times New Roman"><em>ECCV 2024.</em></font>

  [\[PDF\]](https://arxiv.org/pdf/2407.09694) 
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">CVPR 2024</div><img src='images/papers/darenerfgif-lowres.gif' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">DaReNeRF: Direction-aware Representation for Dynamic Scenes</font></font>**

  <font face="Times New Roman"><b>Ange Lou</b>, Benjamin Planche, Zhongpai Gao, Yamin Li, Tianyu Luan, Hao Ding, Terrence Chen, Jack Noble, and Ziyan Wu.</font>

  <font face="Times New Roman"><em>CVPR 2024.</em></font>

  [\[PDF\]](https://arxiv.org/abs/2403.02265) [\[Video\]](https://www.youtube.com/watch?v=hYQsl6Rbxn4)
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">SPIE 2024</div><img src='images/papers/samsnerf.gif' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">SAMSNeRF: Segment Anything Model (SAM) Guides Dynamic Surgical Scene Reconstruction by Neural Radiance Field (NeRF)</font></font>**

  <font face="Times New Roman"><b>Ange Lou</b>, Yamin Li, Xing Yao, Yike Zhang and Jack Noble. <em>SPIE Medical Imaging 2024.</em></font>

  [\[PDF\]](https://arxiv.org/ftp/arxiv/papers/2308/2308.11774.pdf)
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">IEEE-TMI</div><img src='images/papers/min_max.jpg' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">Min-Max Similarity: A Contrastive Semi-Supervised Deep Learning Network for Surgical Tools Segmentation</font></font>**

  **<font face="Times New Roman">Ange Lou</font>**<font face="Times New Roman">, Kareem Tawfik, Xing Yao, Ziteng Liu, and Jack Noble. <em>IEEE Transactions on Medical Imaging.</em></font>

  [\[PDF\]](https://ieeexplore.ieee.org/abstract/document/10098633) [\[Code\]](https://github.com/AngeLouCN/Min_Max_Similarity)
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">CIBM</div><img src='images/papers/CFP-M.jpg' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">CFPNet-M: A Light-Weight Encoder-Decoder Based Network for Multimodal Biomedical Image Real-Time Segmentation</font></font>**

  **<font face="Times New Roman">Ange Lou</font>**<font face="Times New Roman">, Shuyue Guan, and Murray Loew. <em>Computers in Biology and Medicine.</em></font>

  [\[PDF\]](https://www.sciencedirect.com/science/article/pii/S0010482523000446?casa_token=nJw_OzUmY1kAAAAA:37shyy1WppXpUabnuwmmckKZGB1WBHG9zfUYs8EJIjEAgDvXMYTgwVFoPtQMN-NPYBplhDA)[\[Code\]](https://github.com/AngeLouCN/CFPNet-Medicine)
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">JMI & SPIE 2022</div><img src='images/papers/caranet.jpg' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">CaraNet: Context Axial Reverse Attention Network for Segmentation of Small Medical Objects</font></font>**

  **<font face="Times New Roman">Ange Lou</font>**<font face="Times New Roman">, Shuyue Guan, Hanseok Ko, and Murray Loew. <em>Journal of Medical Imaging & SPIE Medical Imaging 2022.</em></font>

  [\[Journal\]](https://www.spiedigitallibrary.org/journals/journal-of-medical-imaging/volume-10/issue-1/014005/CaraNet--context-axial-reverse-attention-network-for-segmentation-of/10.1117/1.JMI.10.1.014005.short#_=_)[\[Conference\]]([https://github.com/AngeLouCN/CFPNet-Medicine](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12032/120320D/CaraNet--context-axial-reverse-attention-network-for-segmentation-of/10.1117/12.2611802.short#_=_))[\[Code\]](https://github.com/AngeLouCN/CaraNet)
  </div>
</div>

<span class='anchor' id='teaching'></span>

# Teaching
- *22 Spring*, Teaching Assistant, Circuits (ECE 2112), Vanderbilt University.
- *21 Fall*, Teaching Assistant, Circuits (ECE 2112), Vanderbilt University.

<span class='anchor' id='service'></span>

# Service
- *Conference Reviews:* MICCAI 2023.
- *Journal Reviews:* iScience, Journal of Medical Imaging (JMI), Imaging Science Journal, Neural Regeneration Research (NRR), IEEE Journal of Biomedical and Health Informatics (JBHI), Image and Vision Computing.
  
<span class='anchor' id='experiences'></span>

# 💻 Experiences
- *2023.05 - 2023.08*, Reseach Intern, [United Imaging Intelligence](https://usa.united-imaging.com/), Cambridge, MA, United States. <br> Worked with [Dr. Benjamin Planche](https://planche.me/) and [Dr. Ziyan Wu](http://wuziyan.com/).

<span class='anchor' id='educations'></span>

# 📖 Educations
- *2021.08 - present*, Ph.D. candidate in Electrical Engineering, [Vanderbilt University](https://www.vanderbilt.edu/), Nashville, TN, United States
- *2017.08 - 2019.05*, M.S. in Electrical Engineering, [George Washington University](https://www.gwu.edu/), Washington, DC, United States
- *2013.08 - 2017.07*, B.Eng. in Energy and Power Engineering, [Wuhan University of Technology](http://english.whut.edu.cn/), Wuhan, Hubei, China

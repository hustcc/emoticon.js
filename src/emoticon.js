/**
  Copyright (c) 2016 hustcc
  License: MIT 
  https://github.com/hustcc/emoticon.js
**/
/* jshint expr: true */
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory();
  else
    root.emoticon = factory();
}(typeof window !== 'undefined' ? window : this, 
function () {
  var lEye = ['￣', '—', '＿', '﹁', '^', '~', '=', '@', '·', '‵', '>', '→',
    '〒', '┬', 'T', '゜', '。', '●', '◎', '⊙', '○', '╯', '︶',
    '〃', 'Φ', 'Θ', '+', 'x', '$', '≧', 'ｕ', 'Ｕ', '→', '←', '•̀'
  ],
  rEye = ['￣', '—', '＿', '﹁', '^', '~', '=', '@', '·', '′', '<', '←',
    '〒', '┬', 'T', '゜', '。', '●', '◎', '⊙', '○', '╰', '︶',
    '〃', 'Φ', 'Θ', '+', 'x', '$', '≦', 'ｕ', 'Ｕ', '→', '←', '•́'
  ],
  lFace = ['(', '[', '{', '|'],
  rFace = [')', ']', '}', '|'],
  mouse = [' ', 'C', 'c', 't', '(○○)', '(工)', '-', 'ゝ', '(··)', '—', '-',
    '_', '。', '，', '.', 'o', 'O', '3', 'ε', 'ｪ', 'v', 'u', '_', 'ω',
    'Д', '﹏', 'ヘ', '︶', '︿', '▽', '△', '∀', '<>', '○', 'ロ', '□',
    'Ｑ', '＠', '皿', '◇', '︹', '＾', '﹌', 'c', 'ｰ'
  ],
  lArm = ['╭∩╮', 'n', 'm', 'v', 'y', 'w', '<', 'o', 'O', '○', '~', '凸', 'ψ',
    '=', '—', '～', '︿', 'b', 'ㄟ', '╰', '╭', '\\', '┌', '┗', '┑', '┍', 'ง'
  ],
  rArm = ['╭∩╮', 'n', 'm', 'v', 'y', 'w', '>', 'o', 'O', '○', '~', '凸', 'ψ',
    '=', '—', '～', '︿', 'd', 'ㄏ', '╮', '╯', '/', '┘', '┛', '┍', '┑',
    '☞', 'ﾉ', 'つ', 'σ', 'ゞ', 'ﾉ', 'っ', 'づ', '彡', '↘', '↗', 'ง'
  ],
  plus = ['\'\'', 'b', '||', '#', '╬', '＊', '//', ';;', '::', 'メ', '〆', 'z'],

  eyeCount = lEye.length,
  faceCount = lFace.length,
  mouseCount = mouse.length,
  lArmCount = lArm.length,
  rArmCount = rArm.length,
  plusCount = plus.length,

  randInd = function(count, probability) {
    var i = Math.floor(count / probability * Math.random());
    return i >= count ? -1 : i;
  },
  getItem = function(arr, i) {
    return i < 0 ? '' : arr[i];
  };
  /**
   *  emoticon() -> String
   *  
   *  return the random emoticon
   */
  return function() {
    var faceInd = randInd(faceCount, 0.7),
        eyeInd = randInd(eyeCount, 1.0),
        mouseInd = randInd(mouseCount, 0.6),
        lArmInd = randInd(lArmCount, 0.5),
        rArmInd = randInd(rArmCount, 0.5),
        plusInd = randInd(plusCount, 0.3);

    return getItem(lArm, lArmInd) + 
           getItem(lFace, faceInd) + 
           getItem(lEye, eyeInd) + 
           getItem(mouse, mouseInd) + 
           getItem(rEye, eyeInd) + 
           getItem(rFace, faceInd) + 
           getItem(plus, plusInd) + 
           getItem(rArm, rArmInd);
  };
});
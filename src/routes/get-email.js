// correo.js
const Imap = require('node-imap');
const { simpleParser } = require('mailparser');

const recibirCorreos = () => {
    const imapConfig = {
        user: 'canou320@gmail.com',
        password: 'thwtjtihuvrixota',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
    };

    const imap = new Imap(imapConfig);

    imap.once('ready', () => {
        imap.openBox('INBOX', true, (err, box) => {
            if (err) throw err;
            //const buscarCriterios = ['UNSEEN', ['SUBJECT', asuntoBuscado]];
            imap.search(['ALL'], (err, results) => {
                if (err) throw err;
                const fetch = imap.fetch(results, { bodies: '' });
                fetch.on('message', (msg, seqno) => {
                    const parts = [];
                    msg.on('body', (stream, info) => {
                        let buffer = '';
                        stream.on('data', chunk => {
                            buffer += chunk.toString('utf8');
                        });
                        stream.on('end', () => {
                            parts.push(buffer);
                        });
                    });
                    msg.once('end', () => {
                        simpleParser(parts.join(''), (err, mail) => {
                            if (err) throw err;
                            console.log('Asunto:', mail?.subject);
                        });
                    });
                });
                fetch.once('end', () => {
                    imap.end();
                });
            });
        });
    });

    imap.once('error', err => {
        console.error(err);
    });

    imap.connect();
};

module.exports = recibirCorreos;
